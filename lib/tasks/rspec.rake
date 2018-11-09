task rspec: :environment do
  desc 'Run all non-system rspec tests'
  exec 'bundle exec rspec --tag=~@type:system'
end
