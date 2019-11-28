module Types
  class CategoryType < Types::BaseObject
    field :category_id, String, null: false
    field :description, String, null: false
  end
end
