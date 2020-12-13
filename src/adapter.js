const storesURL = 'http://localhost:3001/stores'
const storeURL  = (id = null) =>{return `http://localhost:3001/stores/${id}`}
//______________________________________________________________________________
export async function getStores(){
	let stores;
	let storesAsJSON;
	stores = await fetch(storesURL)
	storesAsJSON = await stores.json()
	return storesAsJSON
}
//______________________________________________________________________________
export async function getStore(id){
	let store;
	let storeAsJSON;
	store = await fetch(storeURL(id))
	storeAsJSON = await store.json()
	return storeAsJSON
}
//______________________________________________________________________________
export async function deleteStore(id){
	await fetch(storeURL(id),{
		method: 'delete',
		headers: {
			'Content-type': 'application/json'
		}
	})
}

export async function updateStore(id, name, number, address, city, state, zip){
	const store = {
		id: id,
		name: name,
		address: address,
		city: city,
		state: state,
		zip: zip
	}
	await fetch(storeURL(id),{
		method: 'patch',
		headers: {
			'Content-type': 'application/json'
		},

		body: JSON.stringify({store})
    
    }).then(res => res.json())
	}

//______________________________________________________________________________