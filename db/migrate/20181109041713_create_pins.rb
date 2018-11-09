class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :x
      t.string :y
      t.references :group, foreign_key: true

      t.timestamps
    end
  end
end
