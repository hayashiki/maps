class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # Browser sure love caching everything these days, so we need to handle exceptions
  # caused by browsers caching authenticity tokens and present a message
  rescue_from ActionController::InvalidAuthenticityToken, with: :rescue_invalid_authenticity_token

  def index; end

  def render_not_found
    render file: Rails.root.join('public', '404.html'), status: :not_found
  end

  private

  # Let the user know about the error and redirect them to the previous page
  def rescue_invalid_authenticity_token
    redirect_back fallback_location: root_path,
                  alert: 'There was a problem submitting the form. Please try again.'
  end
end
