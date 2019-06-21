class Customer < ApplicationRecord
  belongs_to :library
  has_many :logs
  has_many :books, through: :logs
end
