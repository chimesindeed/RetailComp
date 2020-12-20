# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
	stores = Store.create([
		{ number: 1,
		  name: 'Tweety',
		  address: 'Tweetys Address',
		  city: 'Tweetys City',
		  state: 'Tweetys State',
		  zip: '10012'
		},

		{ number: 2,
      name: 'Sylvester',
      address: 'Sylvesters Address',
      city: 'Sylvesters City',
      state: 'Sylvesters State',
      zip: '11111'
    },
		
		{ number: 3,
      name: 'Bugs Bunny',
      address: 'Bugs Bunnys Address',
      city: 'Bugs Bunnys City',
      state: 'Bugs Bunnys State',
      zip: '11212'
    },

		{ number: 4,
      name: 'Yosemite Sam',
      address: 'Yosemite Sams Address',
      city: 'Yosemite Sams City',
      state: 'Yosemite Sams State',
      zip: '24114'
    },

		{ number: 5,
      name: 'Foghorn Leghorn',
      address: 'Foghorn Leghorns Address',
      city: 'Foghorn Leghorns City',
      state: 'Foghorn Leghorns State',
      zip: '55521'
    },

		{ number: 6,
      name: 'Kermit',
      address: 'Kermits Address',
      city: 'Kermits City',
      state: 'Kermits State',
      zip: '14122'
    },

		{ number: 7,
      name: 'Ms. Piggy',
      address: 'Ms. Piggys Address',
      city: 'Ms. Piggys City',
      state: 'Ms. Piggys State',
      zip: '76995'
    },

		{ number: 8,
      name: 'Fanzi',
      address: 'Fanzis Address',
      city: 'Fanzis City',
      state: 'Fanzis State',
      zip: '72993'
    },

		{ number: 9,
      name: 'Swedish Chef',
      address: 'Swedish Chefs Address',
      city: 'Swedish Chefs City',
      state: 'Swedish Chefs State',
      zip: '84729'
    },

		{ number: 10,
      name: 'Elmo',
      address: 'Elmos Address',
      city: 'Elmos City',
      state: 'Elmos State',
      zip: '33333'
    },

		{ number: 11,
      name: 'Big Bird',
      address: 'Big Birds Address',
      city: 'Big Birds City',
      state: 'Big Birds State',
      zip: '33122'
    },

		{ number: 12,
      name: 'Grover',
      address: 'Grovers Address',
      city: 'Grovers City',
      state: 'Grovers State',
      zip: '43210'
    },

		{ number: 13,
      name: 'Sunshine Bear',
      address: 'Sunshine Bears Address',
      city: 'Sunshine Bears City',
      state: 'Sunshine Bears State',
      zip: '69223'
    },

		{ number: 14,
      name: 'Ernie',
      address: 'Ernies Address',
      city: 'Ernies City',
      state: 'Ernies State',
      zip: '84321'
    }
 	])
#   Character.create(name: 'Luke', movie: movies.first)

notes = Note.create([
    { 
      note_body: 'post store schedule',
      store_id: 1,
    },

    { 
      note_body: 'update employee hours',
      store_id: 1,
    },

    { 
      note_body: 'put up christmas tree',
      store_id: 2,
    },
    
    { 
      note_body: 'find someone to cover jackies shift',
      store_id: 2,
    },

    {
      note_body: 'note body',
      store_id: 3,
    },
    
    {
      note_body: 'note body',
      store_id: 3,
    },

    {
      note_body: 'notes notes notes',
      store_id: 4,
    },
    
    {
      note_body: 'lots of notes',
      store_id: 4,
    },

    {
      note_body: 'ok, some more notes',
      store_id: 5,
    },
    
    {
      note_body: 'notes',
      store_id: 5,
    },

    {
      note_body: 'notes',
      store_id: 6,
    },
    
    { 
      note_body: 'some notes',
      store_id: 6,
    },

    {
      note_body: 'note body',
      store_id: 7,
    },
    
    { 
      note_body: 'updated hours are',
      store_id: 7,
    },

    { 
      note_body: 'updated hours are',
      store_id: 8,
    },
    
    { 
      note_body: 'well hello there',
      store_id: 8,
    },
    { 
      note_body: 'well hello there',
      store_id: 9,
    },
    
    { 
      note_body: 'i thunk i saw a putty cat',
      store_id: 9,
    },

    { 
      note_body: 'thats all folks',
      store_id: 9,
    },
    
    { 
      note_body: 'well well',
      store_id: 10,
    },
    { 
      note_body: 'store notes',
      store_id: 10,
    },
    
    { 
      note_body: 'notes on store 10',
      store_id: 10,
    },

    { 
      note_body: 'more notes on store 10',
      store_id: 10,
    },
    
    { note_body: 'even more notes on store 10',
      store_id: 10,
    }
  ])
