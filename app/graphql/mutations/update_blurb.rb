module Mutations
  class UpdateBlurb < BaseMutation

    argument :blurb, String, required: true
    field :status, String, null: false

    def resolve(blurb:)
      theCard = Card.all.first
      theCard.blurb = blurb
      theCard.save
      {status: 'Success'}
    end
    
  end
end
