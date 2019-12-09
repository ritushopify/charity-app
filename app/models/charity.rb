class Charity < ApplicationRecord
  belongs_to :category
  has_many :donations
end
