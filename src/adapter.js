

export async function getStores(){
	let stores;
	let storesAsJSON;
	stores = await fetch('http://localhost:3001/stores')
	storesAsJSON = await stores.json()
	return storesAsJSON
}

export async function getStore(id){
	let store;
	let storeAsJSON;
	store = await fetch(`http://localhost:3001/stores/${id}`)
	storeAsJSON = await store.json()
	return storeAsJSON
}