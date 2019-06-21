class Library < ApplicationRecord
  has_many :customers
  has_many :books
end
