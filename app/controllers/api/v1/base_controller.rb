module Api
  module V1
    # Base controller used for all API v3 controllers.
    # @see https://github.com/rails-api/rails-api
    class BaseController < ActionController::API
      wrap_parameters format: []

      def authenticate_request!
        auth_token
        return true
      rescue JWT::VerificationError, JWT::DecodeError
        false
      end

    private

      def http_token
        @http_token ||= if request.headers['Authorization'].present?
          request.headers['Authorization'].split(' ').last
        end
      end

      def auth_token
        @auth_token ||= JsonWebToken.decode(http_token)
      end
    end
  end
end
