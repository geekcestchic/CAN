class CreateSimilarity < ActiveRecord::Migration
  def change
    create_table :similarities do |t|
      t.integer :similee_id
      t.integer :similar_id
    end
  end
end
