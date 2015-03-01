class Project < ActiveRecord::Base
  has_many :comments
  has_many :ratings
  has_and_belongs_to_many :categories
  has_and_belongs_to_many :brands

  # self association (to assign projects that are similar to each other), added a parent_project_id column in the projects table as well
  has_many :similars, :class_name => "Project",
    :foreign_key => "parent_project_id"
  belongs_to :parent_post, :class_name => "Project",
    :foreign_key => "parent_project_id"
end
