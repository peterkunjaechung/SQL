Rails.application.routes.draw do
  namespace :api do
    resources :libraries, :books, :logs
    get "monthly_rental_trend", to: "logs#monthly_rental_trend"
    get "yearly_rental_trend", to: "logs#yearly_rental_trend"
  end
end
