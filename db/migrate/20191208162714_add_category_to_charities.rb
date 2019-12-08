class AddCategoryToCharities < ActiveRecord::Migration[6.0]
  def change
    add_column :charities, :category, :string
  end
end
