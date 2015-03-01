class DropIslikesTable < ActiveRecord::Migration
  def change
    drop_table :islikes
  end
end
