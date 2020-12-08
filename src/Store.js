import React from 'react'
import { css } from 'aphrodite'
import { styles } from  './stylesheet/stylesheet-stores.js'

const Store = (props) => {
	return (
		<div className= {(css(styles.storeBackground))}>
			<h3>Store Name: {props.name}</h3>
			<h5>Store Number: {props.number}</h5>
			<h5>Address: {props.address}</h5>
			<h5>City: {props.city}</h5>
			<h5>State: {props.state}</h5>
			<h5>Zip: {props.zip}</h5>

		</div>
		

		)
}
export default Store