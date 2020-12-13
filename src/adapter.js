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
//______________________________________________________________________________