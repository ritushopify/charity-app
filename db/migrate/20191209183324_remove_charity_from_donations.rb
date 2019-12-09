class RemoveCharityFromDonations < ActiveRecord::Migration[6.0]
  def change

    remove_column :donations, :charity, :varchar
  end
end
