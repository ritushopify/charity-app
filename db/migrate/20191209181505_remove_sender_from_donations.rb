class RemoveSenderFromDonations < ActiveRecord::Migration[6.0]
  def change
    remove_column :donations, :sender_id, :bigint
  end
end
