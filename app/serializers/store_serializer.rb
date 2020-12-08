class StoreSerializer < ActiveModel::Serializer
  attributes :id, :number, :name, :address, :city, :state, :zip
end
