module Mutations
  class UpdateCard < BaseMutation

    argument :card_input, Types::CardAttributes, required: true
    field :status, String, null: false
    
    def resolve(card_input:) 
      card = Card.find(card_input.id.to_i)
      card.blurb = card_input.blurb
      card.message = card_input.message
      card.save
      {status: 'Success'}
    end
    
  end
end
