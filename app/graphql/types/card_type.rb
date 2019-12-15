module Types
  class CardType < Types::BaseObject 
    field :id, String, null: false
    field :blurb, String, null: true
    field :message, String, null: true
  end
end
