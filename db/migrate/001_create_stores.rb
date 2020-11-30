class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
	t.integer :store_number
	t.string :store_nickname
	t.string :address1
	t.string :address2
	t.string :city
	t.string :state
	t.integer :zip_code
	t.integer :phone_number
	t.string :store_manager
      t.timestamps
    end
  end
end
