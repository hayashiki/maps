module Api
  module V1
    class GroupSerializer < ActiveModel::Serializer
      attributes :id, :name, :enabled, :color
    end
  end
end
