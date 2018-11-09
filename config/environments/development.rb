Rails.application.configure do
  config.port = '3000'
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true
  config.debug_exception_response_format = :default

  # Enable/disable caching. By default caching is disabled.
  if Rails.root.join('tmp/caching-dev.txt').exist?
    config.action_controller.perform_caching = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => 'public, max-age=172800'
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  config.action_mailer.perform_caching = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Run all background jobs inline
  config.active_job.queue_adapter = :inline

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true

  # Suppress logger output for asset requests.
  config.assets.quiet = true

  # Raises error for missing translations
  # config.action_view.raise_on_missing_translations = true

  # Use the ActionMailer::Base.deliveries array to store sent emails
  # @see http://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration
  config.action_mailer.delivery_method = :test

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  # config.file_watcher = ActiveSupport::EventedFileUpdateChecker

  # Use local for active_storage
  config.active_storage.service = :local

  # Set the mailer host
  config.action_mailer.default_url_options = { :host => 'localhost' }

  # Enable bullet query performance logging
  config.after_initialize do
    Bullet.enable        = true
    Bullet.bullet_logger = true
    Bullet.console       = true
    Bullet.rails_logger  = true
  end
end

HttpLogger.collapse_body_limit = nil
HttpLogger.colorize = true
HttpLogger.ignore = [
  /.*ondemand\.websol\.barchart\.com*/,
  /.*newrelic\.com*/,
  /itercom\.io/
]
