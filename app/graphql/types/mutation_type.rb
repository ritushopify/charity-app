module Types
  class MutationType < Types::BaseObject
    
    field :update_card, mutation: Mutations::UpdateCard
    field :update_blurb, mutation: Mutations::UpdateBlurb
      
    # field :test_field, String, null: false,
    #   description: "An example field added by the generator"
    # def test_field
    #   "Hello World"
    # end
  end
end
