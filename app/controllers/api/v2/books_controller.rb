require 'json'
class Api::V2::BooksController < ApplicationController
  before_action :set_recipe, only: %i[show destroy update] 
  def index
    book = Book.all
    render json: book
  end

  def create
    book = Book.create!(book_params)
    if book.save 
      render json: book
    else
      render json: book.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @book
  end

  def destroy
    @book&.destroy
    render json: { message: 'Book is deleted!' }
  end

  def update
    if @book.update
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def latest
    @book = Book.last
    render json: BookSerializer.new(@book).serializable_hash[:data][:attributes]
  end

  def get_json
    @data = File.read("#{Rails.root}/public/get_json.json")
    @obj = eval(@data)
  end

  private

  def set_recipe
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:name, :author, :price, :category, :image)
  end
end
