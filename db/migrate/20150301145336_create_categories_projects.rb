class CreateCategoriesProjects < ActiveRecord::Migration
  def change
    create_join_table :categories, :projects 
  end
end
