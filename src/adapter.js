

export async function getStores(){
	let abc = null;
	let x = null;
	abc = await fetch('http://localhost:3001/stores')
	x = await abc.json()
	return x
}