class CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render json: @comments, status: :ok
  end

  def create
    @comment = Comment.new params.require(:comment).permit(:title, :content)
    @comment.project_id = params[:id]
    @comment.save
    render json: @comment, status: :created
  end

  def destroy
    @comment = comment.find(params[:id])
    @comment.destroy
  end

end