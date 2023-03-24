class AddGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.text :name
      t.text :description
      t.integer :counter
      t.integer :rating
    end
  end
end
