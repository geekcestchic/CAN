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
    @project = Project.new project_params
    @project.user_id = current_user.id
    @project.save
    redirect_to projects_path
  end

  def similars
    @project = Project.find(params[:id])
    # redirect_to project_path(@project) if @project.update
    # else render project_similar(@project)
    # render json: @project, status: :created
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    @project.update project_params
    # head :no_content, status: :ok  //no need for this right now as doing a traditional rails redirect
    redirect_to project_path(@project)
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to projects_path
  end

  def project_params
    params.require(:project).permit(:user_id, :title, :content, :video, :image, { project_ids: [] })
  end
end