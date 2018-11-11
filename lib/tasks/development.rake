desc "Start the server in development mode"
task :start => :environment do
  exec "RAILS_ENV=development foreman start -f ./Procfile.development"
end
