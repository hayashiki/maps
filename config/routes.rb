require 'resque/server'

Rails.application.routes.draw do
  root 'application#index'
  get '*' => redirect('/')
end
