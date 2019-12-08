class RenameCategoryToCategoryNameInCharities < ActiveRecord::Migration[6.0]
  def change
    rename_column :charities, :category, :category_name
  end
end
