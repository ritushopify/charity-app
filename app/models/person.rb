class Person < ApplicationRecord
  has_many :donation
  has_many :card
end
