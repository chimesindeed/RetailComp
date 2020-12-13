# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
	stores = Store.create([
		{ number: 5,
		  name: 'Store1',
		  address: 'address1',
		  city: 'city1',
		  state: 'state1',
		  zip: 'zip1'
		},

		{ number: 3,
                  name: 'Store2',
                  address: 'address2',
                  city: 'city2',
                  state: 'state2',
                  zip: 'zip2'
                }
 	])
#   Character.create(name: 'Luke', movie: movies.first)
