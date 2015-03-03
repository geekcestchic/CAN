class RatingsController < ApplicationController

  def create
    @rating = Rating.create params.require(:rating).permit(:value, :project_id)
    render json: @rating, status: :created
  end
end