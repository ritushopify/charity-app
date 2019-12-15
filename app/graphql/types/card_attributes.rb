module Types
  class CardAttributes < Types::BaseInputObject
    argument :id, String, required: true
    argument :blurb, String, required: false
    argument :message, String, required: false
  end
end
