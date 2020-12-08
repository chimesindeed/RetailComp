import React from 'react'

const Store = (props) => {
	return (
		<div>
			<h5>{props.id}</h5>
			<h5>{props.number}</h5>
			<h5>{props.name}</h5>
			<h5>{props.address}</h5>
			<h5>{props.city}</h5>
			<h5>{props.state}</h5>
			<h5>{props.zip}</h5>

		</div>
		

		)
}
export default Store