class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :description
      t.string :score
      t.integer :airline_id

      t.timestamps
    end
  end
end
