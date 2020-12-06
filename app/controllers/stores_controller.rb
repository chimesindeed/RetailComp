class StoresController < ApplicationController
	def index
		stores = Store.all
		render json: stores
	end

	def show
		store = Store.findbyid(:id)
		render json: store
	end
end
