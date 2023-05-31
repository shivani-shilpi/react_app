Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      post 'recipes/create'
      patch 'recipes/:id', to: 'recipes#update'
      get '/show/:id', to: 'recipes#show'
      delete '/destroy/:id', to: 'recipes#destroy'
    end

    namespace :v2 do
      get 'books/index'
      post 'books/create'
      patch '/patch/:id', to: 'books#update'
      get '/show/:id', to: 'books#show'
      delete '/destroy/:id', to: 'books#destroy'
      get 'latest', to: 'books#latest'
      get 'get_json', to: 'books#get_json'
    end
  end

  namespace :api do
    namespace :v3 do 
      resources :airlines, params: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  # get '/* path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "homepage#index"
end
