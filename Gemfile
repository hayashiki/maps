source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

ruby '2.5.3'
gem 'rails', '5.2.1'

gem 'actionpack-action_caching'
gem 'active_model_serializers', '~> 0.10.0'
gem 'api-pagination'
gem 'awesome_print'
gem 'barnes'
gem 'bitters'
gem 'bootsnap', require: false
gem 'bourbon'
gem 'dalli'
gem 'deep_cloneable'
gem 'devise', '~> 4.4.1'
gem 'googleauth'
gem 'high_voltage'
gem 'inline_svg'
gem 'jwt'
gem 'kaminari'
gem 'koala'
gem 'local_time'
gem 'mixpanel-ruby'
gem 'omniauth'
gem 'pg'
gem 'premailer-rails'
gem 'puma'
gem 'puma_worker_killer'
gem 'pygments.rb'
gem 'rack', '~> 2.0'
gem 'rack-canonical-host'
gem 'rack-cors', require: 'rack/cors'
gem 'react_on_rails', '11.1.4'
gem 'redcarpet'
gem 'redis'
gem 'resque'
gem 'rest-client', '~> 2'
gem 'rollbar'
gem 'ruby-units'
gem 'sass-rails'
gem 'simple_form'
gem 'sinatra', '~> 2.0'
gem 'stripe'
gem 'title'
gem 'uglifier'
gem 'useragent'
gem 'webpacker', '4.0.0.pre.3'
gem 'wicked_pdf'
gem 'wkhtmltopdf-heroku'

group :development do
  gem 'web-console'
end

group :development, :test do
  gem 'bullet'
  gem 'byebug'
  gem 'capybara'
  gem 'dotenv-rails'
  gem 'factory_bot_rails', '~> 4.0'
  gem 'foreman'
  gem 'http_logger'
  gem 'json_schema'
  gem 'rspec-rails', '~> 3.8'
  gem 'rubocop', require: false
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'timecop'
end

group :test do
  gem 'codecov', require: false
  gem 'database_cleaner'
  gem 'rails-controller-testing'
  gem 'rb-fsevent'
  gem 'rspec-retry'
  gem 'rspec_junit_formatter'
  gem 'rspec_tap'
  gem 'simplecov', require: false
  gem 'stripe-ruby-mock', '~> 2.5.4', require: 'stripe_mock'
  gem 'terminal-notifier-guard'
  gem 'webmock'
end

group :production do
  gem 'resque-heroku-signals'
end

gem 'mini_racer', platforms: :ruby
