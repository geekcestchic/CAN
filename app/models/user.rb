class User < ActiveRecord::Base

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable

  has_many :projects
  has_many :comments

  has_many :following, through: :active_relationships, source: :followed

  # has_many :followers, :class_name => "User",
  #   :foreign_key => "follower_id"
  # belongs_to :followee, :class_name => "User",
  #   :foreign_key => "follower_id"
end
