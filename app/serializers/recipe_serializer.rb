class RecipeSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :ingredients, :instruction, :recipe_image, :recipe_image_url, created_at, :updated_at
end
