module Types
  class CardInputType < Types::BaseInputObject
    argument :id, ID, required: true
    argument :blurb, String, required: false
    argument :message, String, required: false
  end
end
