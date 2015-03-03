class Similarity < ActiveRecord::Base
  belongs_to :similee, class_name: "Project"
  belongs_to :similar, class_name: "Project"
end