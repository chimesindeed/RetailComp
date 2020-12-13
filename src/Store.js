import React from 'react'

const Store = (props) => {
	return (
		<div className= {props.className}>
			<h2>{props.name}</h2>
			<h3>Store Number: {props.number}</h3>
			<h3>Address: {props.address}</h3>
			<h3>City: {props.city}</h3>
			<h3>State: {props.state}</h3>
			<h3>Zip: {props.zip}</h3>
		</div>
		

		)
}
export default Store