unless ENV['HOST'] == 'www.harvestprofit.com'
  # Intercept emails in staging enviroments.
  # Only let emails out to *@harvestprofit.com emails.
  # Preview emails in development: http://localhost:3000/rails/mailers
  class MailInterceptor
    def self.delivering_email(message)
      allowed_emails = message.to.select do |email|
        email =~ /^.*@harvestprofit.com/
      end
      message.to = allowed_emails.length.positive? ? allowed_emails : ['jaryd@harvestprofit.com']
    end
  end
  ActionMailer::Base.register_interceptor(MailInterceptor)
end
