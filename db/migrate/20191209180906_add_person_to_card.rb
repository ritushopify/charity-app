class AddPersonToCard < ActiveRecord::Migration[6.0]
  def change
    add_reference :cards, :person, foreign_key: true
  end
end
