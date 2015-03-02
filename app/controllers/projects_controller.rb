class ProjectsController < ApplicationController
  def index
    @projects = Project.all
    respond_to do |format|
      format.html
      format.json { render json: @projects }
    end
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.create project_params
    render json: @project, status: :created
  end

  def project_params
    params.require(:project).permit(:user_id, :title, :content, :video, :image, :parent_project_id)
  end
end