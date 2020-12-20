class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note_body, :store_id
end
