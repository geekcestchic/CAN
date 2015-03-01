class Project < ActiveRecord::Base
  has_many :comments
  has_many :ratings
  has_and_belongs_to_many :categories
  has_and_belongs_to_many :brands
end
