web: bundle exec puma -C config/puma.rb
worker: QUEUE=default bundle exec rake resque:work
scheduled_worker: QUEUE=scheduled_tasks,mailers bundle exec rake resque:work
