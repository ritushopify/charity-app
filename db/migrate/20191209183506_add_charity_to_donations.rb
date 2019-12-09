class AddCharityToDonations < ActiveRecord::Migration[6.0]
  def change
    add_reference :donations, :charity, null: false, foreign_key: true
  end
end
