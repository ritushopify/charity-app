module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :categories, [Types::CategoryType], null: false
    def categories
      Category.all
    end

    field :charities, [Types::CharityType], null: false
    def charities
      Charity.all
    end

    field :charities_for_category, [Types::CharityType], null: true do
      argument :api_id, String, required: true
    end
    def charities_for_category(api_id:)
      Charity.where(category_api_id: api_id)
    end

  field :card, Types::CardType, null: false
  def card
    Card.all.first
  end

   
  
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end
