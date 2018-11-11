module Api
  module V1
    class PinsController < Api::V1::BaseController
      before_action :authenticate_request!

      # GET /pins
      def index
        pins = Pin.all
        paginate json: pins
      end

      # GET /pins/1
      def show
        pin = Pin.find(params[:id])
        render json: pin
      end

      # POST /pins
      def create
        pin = Pin.new(pin_params)
        pin.save!
        render json: pin
      end

      # PATCH/PUT /pins/1
      def update
        pin = Pin.find(params[:id])
        pin.update!(pin_params)
        render json: pin
      end

      # DELETE /pins/1
      def destroy
        pin = Pin.find(params[:id])
        pin.destroy!
        render json: :ok
      end

    private

      def pin_params
        params.permit(:id, :x, :y, :group_id)
      end
    end
  end
end
