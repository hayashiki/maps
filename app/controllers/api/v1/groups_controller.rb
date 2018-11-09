module Api
  module V1
    # Controls an entity's Applications via the API
    class GroupsController < Api::V1::BaseController
      before_action :authenticate_request!

      # GET /groups
      def index
        groups = Group.all
        paginate json: groups
      end

      # GET /groups/1
      def show
        group = Group.find(params[:id])
        render json: group
      end

      # POST /groups
      def create
        group = Group.new(group_params)
        group.save!
        render json: group
      end

      # PATCH/PUT /groups/1
      def update
        group = Group.find(params[:id])
        group.update!(group_params)
        render json: group
      end

      # DELETE /groups/1
      def destroy
        group = Group.find(params[:id])
        group.destroy!
        render json: :ok
      end

      private

      def group_params
        params.permit(
          :id,
          :name,
          :enabled,
          :color)
      end
    end
  end
end
