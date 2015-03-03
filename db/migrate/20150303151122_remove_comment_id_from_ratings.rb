class RemoveCommentIdFromRatings < ActiveRecord::Migration
  def change
    remove_column :ratings, :comment_id, :integer
  end
end
