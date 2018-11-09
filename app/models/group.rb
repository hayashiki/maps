class Group < ApplicationRecord
  has_many :pins, dependent: :destroy
end
