# See Koala::Configuration for more options, including details on how to send requests through
# your own proxy servers.
Koala.configure do |config|
  # This should be a user token
  config.access_token = ENV["FB_APP_TOKEN"]
  # Facebook App ID
  config.app_id = ENV["FB_APP_ID"]
  # Facebook App Secret
  config.app_secret = ENV["FB_APP_SECRET"]
end
