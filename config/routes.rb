require 'resque/server'

Rails.application.routes.draw do
  root 'application#index'

  namespace :api do
    namespace :v1 do
      resources :groups
      resources :pins
    end
  end

  get '*' => redirect('/')
end
