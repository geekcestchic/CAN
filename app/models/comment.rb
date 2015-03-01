class Comment < ActiveRecord::Base
  belongs_to :project
  has_one :rating
end
