class StoresController < ApplicationController
	def index
		stores = Store.all

		render json: stores
	end

	def create
		store = Store.create(store_params)

		render json :store
	end

	def update
		store = Store.find(params[:id])

		render json :store
	end

	def note_params
		params.require(:store).permit(:number, :name, :address, :city, :state, :zip)
	end

end
