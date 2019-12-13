module Mutations
  class UpdateCard < BaseMutation

    argument :card_input, Types::CardInputType, required: true
    field :status, String, null: false

    def resolve(card_input:)
      theCard = Card.find(card_input.id)
      theCard.blurb = card_input.blurb
      theCard.save
      {status: 'Success'}
    end
    
  end
end
