class NotesController < ApplicationController

	def create
		note = Note.create(note_params)

		render json: note
	end

	def destroy
		note = Note.find(params[:id]).destroy
	end
	
	def note_params
		params.require(:note).permit(:note_body, :store_id)
	end
end
