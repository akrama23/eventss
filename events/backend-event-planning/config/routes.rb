Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 

      resources :users
      resources :events
      resources :user_events
      resources :guests

      # post '/login', to: 'auth#log_in'
      get '/login', to: "auth#login"
      post '/register', to: "auth#create"
      get '/logout', to: "auth#logout"

    end 
  end 
end
