import React from 'react'
import { css } from 'aphrodite'
import { styles } from  './stylesheet/stylesheet-stores.js'

const Store = (props) => {
	return (
		<div className= {(css(styles.storeBackground))}>
			<li>Store Name: {props.name}</li>
			<li>Store Number: {props.number}</li>
			<li>Address: {props.address}</li>
			<li>City: {props.city}</li>
			<li>State: {props.state}</li>
			<li>Zip: {props.zip}</li>
			<div><button>update</button><button>delete</button></div>
		</div>
		

		)
}
export default Store