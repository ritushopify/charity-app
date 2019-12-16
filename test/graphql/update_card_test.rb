require 'test_helper'
require 'json'

class UpdateCardTestCase < ActiveSupport::TestCase
  setup  do
    @card = Card.first
    puts @card.to_json
    @newBlurb = Time.new.to_s
    theMutation = "mutation updateCard($id: String, $blurb: String) {
      updateCard(
        input: {cardInput: {
          id:  $id,
          blurb: $blurb
        }}
      ) {
        status
      } 
    }"
    variables = {
        id: @card.id,
        blurb: @newBlurb
    }
    CharityAppSchema.execute(theMutation, variables: variables)
  end

  test 'update card mutation is sucessful' do
    @updatedBlurb = Card.first.blurb
    assert_equal(@updatedBlurb, @newBlurb)
  end  
end

# class UpdateCardTestCase < ActiveSupport::TestCase
#   setup  do
#     @card = Card.first
#     @newBlurb = Time.new.to_s
#     def perform(id: @card.id, blurb: @newBlurb)
#       Mutations::UpdateCard.new(id: id, blurb: blurb)
#     end
#   end
#   test 'update card mutation is sucessful' do
#     @updatedBlurb = Card.first.blurb
#     assert_equal(@updatedBlurb, @newBlurb)
#   end  
# end

