class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
		t.integer :number
		t.string :name
		t.string :address
		t.string :city
		t.string :state
		t.integer :zip

      t.timestamps
    end
  end
end
