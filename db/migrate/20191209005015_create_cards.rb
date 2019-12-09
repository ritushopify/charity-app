class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.integer :occasion
      t.string :blurb
      t.string :message

      t.timestamps
    end
  end
end
