class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
	t.string :note_title
	t.text :note_body
	t.integer :store_id
      t.timestamps
    end
  end
end