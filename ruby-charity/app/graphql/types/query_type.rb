module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :categories, [Types::CategoryType], null: false
    def categories
      Category.all
    end

    field :all_charities, [Types::CharityType], null: false
    def all_charities
      Charity.all
    end

    field :charities_for_category, [Types::CharityType], null: true do
      argument :cat_id, Int, required: true
    end
    def charities_for_category(cat_id:)
      Charity.where(category_id: cat_id)
    end
   
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end
