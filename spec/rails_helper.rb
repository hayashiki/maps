require 'simplecov'
SimpleCov.start 'rails'

if ENV['CODECOV_TOKEN']
  require 'codecov'
  SimpleCov.formatter = SimpleCov::Formatter::Codecov
end

# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'database_cleaner'
require 'factory_bot_rails'
require 'http_logger'
require 'rspec/rails'
require 'rspec/retry'
require 'webmock/rspec'
require 'support/factory_bot'
require 'timecop'

# Requires supporting ruby files with custom matchers and macros, etc,
# in spec/support/ and its subdirectories.
Dir["#{File.dirname(__FILE__)}/support/**/*.rb"].each { |file| require file }

# Set up HTTP logging for saving WebMock responses manually because it
# sucks when VCR doesn't work properly and results in a lot of wasted time.
# Uncomment the following to debug WebMock:
# HttpLogger.logger = Logger.new(STDOUT)
# HttpLogger.collapse_body_limit = nil
# HttpLogger.colorize = true

# Checks for pending migrations before tests are run.
# If you are not using ActiveRecord, you can remove this line.
ActiveRecord::Migration.maintain_test_schema!

# Sets ActiveModelSerializers to use the rspec path for schemas
ActiveModelSerializers.config.schema_path = 'spec/support/schemas'

RSpec.configure do |config|
  # Ensure that if we are running js tests, we are using latest webpack assets
  # This will use the defaults of :js and :server_rendering meta tags
  ReactOnRails::TestHelper.configure_rspec_to_compile_assets(config)
  # Include devise test helpers
  config.include Warden::Test::Helpers

  config.mock_with :rspec
  config.use_transactional_fixtures = true
  config.infer_base_class_for_anonymous_controllers = false
  config.infer_spec_type_from_file_location!
  config.order = 'random'
  config.include Devise::Test::ControllerHelpers, type: :controller

  config.include ActiveModelSerializers::Test::Schema, type: :controller
  config.include ActiveModelSerializers::Test::Serializer, type: :controller

  config.before(:all) do
    DatabaseCleaner.start
    Rails.application.load_seed
    ActiveJob::Base.queue_adapter = :test
  end

  config.after(:all) do
    DatabaseCleaner.clean
  end

  # Allow Capybara specs to connect to localhost
  config.before(:all, type: :system) do
    # Configure Capybara for Heroku
    chrome_bin = ENV.fetch('GOOGLE_CHROME_SHIM', nil)
    options = {}
    options[:args] = ['headless', 'disable-gpu']
    options[:binary] = chrome_bin if chrome_bin
    Capybara.register_driver :headless_chrome do |app|
      Capybara::Selenium::Driver.new(
        app,
        browser: :chrome,
        options: Selenium::WebDriver::Chrome::Options.new(options)
      )
    end

    Capybara.javascript_driver = :headless_chrome

    WebMock.disable_net_connect!(allow: '127.0.0.1')
  end
end
