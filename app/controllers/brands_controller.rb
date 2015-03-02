class BrandsController < ApplicationController

  def index
    @brands = Brand.all    
  end

  def show
    @Brand = Brand.find(params[:id])
  end

end