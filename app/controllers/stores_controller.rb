class StoresController < ApplicationController
	def index
		stores = Store.all

		render json: stores
	end

	def show

		store = Store.find_by({:id=>params[:id]})
	
		render json: store
	end

	def create
		store = Store.create(store_params)

		render json: store
	end

	def update
		# binding.pry
		store = Store.find_by({:id=>params[:id]})
		store.update(store_params)

		render json: store
	end

	def destroy
		store = Store.find_by({:id=>params[:id]}).destroy
	end
	def store_params
		params.require(:store).permit(:name, :number, :address, :city, :state, :zip)
	end

end
