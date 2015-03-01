class CreateBrandsProjects < ActiveRecord::Migration
  def change
    create_join_table :brands, :projects
  end
end
