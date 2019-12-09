class Card < ApplicationRecord
  enum occasion: [:Birthday, :Christmas, :Graduation, :None]
  belongs_to :person
  has_one :donation
end
