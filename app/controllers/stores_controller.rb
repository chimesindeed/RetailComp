class StoresController < ApplicationController
	def index
		stores = Store.all

		render json: stores
	end

	def show
		store = Store.find(params[:id])

		render json: store
	end

	def create
		store = Store.create(store_params)

		render json: store
	end

	def update
		binding.pry
		store = Store.update(store_params)

		render json: store
	end

	def destroy
		store = Store.find(params[:id]).destroy
	end
	def store_params
		params.require(:store).permit(:number, :name, :address, :city, :state, :zip)
	end

end
