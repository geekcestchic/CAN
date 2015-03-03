class RatingsController < ApplicationController

  def create
    user_id = current_user.id
    project_id = Project.find(params[:id])
    @rating = Rating.new(user_id:user_id,project_id:project_id)
    @rating.save params.require(:rating).permit(:value, :user_id, :project_id)
    respond_to do |format|
      format.html
      format.json {render json: @rating, status: :created}
    end
  end
end