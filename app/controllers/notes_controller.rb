class NotesController < ApplicationController
	def index
		notes = Note.all

		render json: notes
	end

	def show
		note = Note.find(params[:id])

		render json: note
	end

	def create
		note = Note.create(note_params)

		render json: note
	end

	def update
		# binding.pry
		note = Note.find(params[:id])
		note.update(note_params)

		render json: note
	end

	def destroy
		note = Note.find(params[:id]).destroy
	end
	
	def note_params
		params.require(:note).permit(:note_title, :note_body, :store_id)
	end
end
