Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 

      
      post '/login', to: 'auth#log_in'

    end 
  end 
end
