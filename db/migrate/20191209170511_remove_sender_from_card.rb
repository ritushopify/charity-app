class RemoveSenderFromCard < ActiveRecord::Migration[6.0]
  def change

    remove_column :cards, :sender_id, :bigint
  end
end
