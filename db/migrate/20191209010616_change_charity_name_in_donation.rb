class ChangeCharityNameInDonation < ActiveRecord::Migration[6.0]
  def change
    rename_column :donations, :charity_name, :charity
  end
end
