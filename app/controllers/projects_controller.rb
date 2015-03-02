class ProjectsController < ApplicationController
  def index
    @projects = Project.all
    respond_to do |format|
      format.html
      format.json { render json: @projects }
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.create project_params
    redirect_to projects_path
  end

  def similars
    @project = Project.find(params[:id])
    # redirect_to project_path(@project) if @project.update
    # else render project_similar(@project)
    # render json: @project, status: :created
  end

  def project_params
    params.require(:project).permit(:user_id, :title, :content, :video, :image, :parent_project_id)
  end
end