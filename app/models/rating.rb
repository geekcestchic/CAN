class Rating < ActiveRecord::Base
  belongs_to :comment
  belongs_to :project
end
