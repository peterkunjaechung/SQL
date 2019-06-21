class Book < ApplicationRecord
  belongs_to :library
  has_many :logs
  has_many :customers, through: :logs
end
