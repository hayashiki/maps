module Api
  module V1
    class PinSerializer < ActiveModel::Serializer
      attributes :id, :x, :y, :group_id
    end
  end
end
