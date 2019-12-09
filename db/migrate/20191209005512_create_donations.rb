class CreateDonations < ActiveRecord::Migration[6.0]
  def change
    create_table :donations do |t|
      t.integer :amount
      t.string :charity_name
      t.belongs_to :card, null: false, foreign_key: true

      t.timestamps
    end
  end
end
