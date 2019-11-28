module Types
  class CharityType < Types::BaseObject
    field :category_id, String, null: false
    field :employer_id, String, null: false
    field :name, String, null: false
    field :url, String, null: false
    field :city, String, null: false
    field :state, String, null: false
  end
end