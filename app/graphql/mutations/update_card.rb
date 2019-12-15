module Mutations
  class UpdateCard < BaseMutation

    argument :id, String, required: true
    argument :blurb, String, required: false
    argument :message, String, required: false

    field :status, String, null: false
    
    def resolve(id:, blurb:, message:) 
      card = Card.find(id.to_i)
      card.blurb = blurb
      card.message = message
      card.save
      {status: 'Success'}
    end
    
  end
end
