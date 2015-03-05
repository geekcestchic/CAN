class UsersController < ApplicationController

  before_action :authenticate_user!
  before_action :authenticate_user!, only: [:index, :edit, :update, :destroy, :following, :followers]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])  
    respond_to do |format|
      format.html
      format.js
    end
  end

  def following
    @title  = "Following"
    @user = User.find(params[:id])
    @users = @user.following
    render 'show_follow'
  end

  def followers
    @title = "Followers"
    @user  = User.find(params[:id])
    @users = @user.followers
    render 'show_follow'
  end



end