module Api
  module V1
    # Base controller used for all API v3 controllers.
    # @see https://github.com/rails-api/rails-api
    class BaseController < ActionController::API
      include Api::V1::Authentication
      wrap_parameters format: []
    end
  end
end
