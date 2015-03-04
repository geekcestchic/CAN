class User < ActiveRecord::Base

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:twitter, :facebook]

  has_many :projects
  has_many :comments

  has_many :active_relationships, class_name: "Relationship", foreign_key: "follower_id", dependent: :destroy
  has_many :passive_relationships, class_name: "Relationship",
  foreign_key: "followed_id", dependent: :destroy


  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.firstname = auth.info.name
      user.avatar = auth.info.image
    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session['devise.facebook'] && session ['devise.facebook_data']['extra']['raw_info']
        user.email = data['email'] if user.email.blank?
      end
    end
  end

  def self.find_for_twitter(auth, signed_in_user=nil)
    twitter_email = auth.info.nickname.downcase + "@twitter.com"
    if user = signed_in_user || User.find_by_email(twitter_email)
      user.provider = auth.provider
      user.uid = auth.uid
      user.firstname = auth.info.name
      user.avatar = auth.info.image
      user.save
      user
    else
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.firstname = auth.info.name
        user.avatar = auth.info.image
        user.email = twitter_email
        user.password = Devise.friendly_token[0,20]
      end
    end
  end
  
  def role?(role_to_compare)
    self.role.to_s == role_to_compare.to_s
  end
  
  #Follows a user.
  def follow(other_user)
    active_relationships.create(followed_id: other_user.id)
  end

  #Unfollows a user.
  def unfollow(other_user)
    active_relationships.find_by(followed_id: other_user.id).destroy
  end

  #Returns true if the current user is following the other user.
  def following?(other_user)
    following.include?(other_user)
  end
end
