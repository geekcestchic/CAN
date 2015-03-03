class RemoveParentProjectIdFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :parent_project_id, :integer
  end
end
