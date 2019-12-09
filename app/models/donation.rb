class Donation < ApplicationRecord
  belongs_to :card
  belongs_to :person
  belongs_to :charity
end
