class ChangeCategoryIdColName < ActiveRecord::Migration[6.0]
  def change
    rename_column :categories, :categoryId, :category_id
  end
end
