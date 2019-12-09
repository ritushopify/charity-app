class AddPersonToDonation < ActiveRecord::Migration[6.0]
  def change
    add_reference :donations, :person, foreign_key: true
  end
end
