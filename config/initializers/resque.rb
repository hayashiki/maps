require 'resque/failure/multiple'
require 'resque/failure/redis'
require 'rollbar'
require 'redis'

if ENV['REDIS_URL']
  Resque.redis = Redis.new(url: ENV['REDIS_URL'])
else
  Resque.inline = true
end

Resque::Failure::Multiple.classes = [Resque::Failure::Redis, Resque::Failure::Rollbar]
Resque::Failure.backend = Resque::Failure::Multiple

Resque.before_fork do
  defined?(ActiveRecord::Base) &&
    ActiveRecord::Base.connection.disconnect!
end

Resque.after_fork do
  defined?(ActiveRecord::Base) &&
    ActiveRecord::Base.establish_connection
end
