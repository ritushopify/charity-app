class CreateCharities < ActiveRecord::Migration[6.0]
  def change
    create_table :charities do |t|
      t.belongs_to :category, null: false, foreign_key: true
      t.string :employer_id
      t.string :name
      t.string :url
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
