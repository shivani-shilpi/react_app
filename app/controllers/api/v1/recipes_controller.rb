class Api::V1::RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show destroy update]
  def index
    recipe = Recipe.all.order(created_at: :desc)
    render json: recipe
  end

  def create
    recipe = Recipe.create!(recipe_params)
    if recipe.save
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def show
    render json: BookSerializer.new(@recipe).serializable_hash[:data][:attributes]
  end

  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors
    end
  end

  def destroy
    @recipe&.destroy
    render json: { message: 'Recipe deleted!' }
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.permit(:name, :instruction, :ingredients, :recipe_image)
  end
end
