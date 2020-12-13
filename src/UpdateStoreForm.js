import React from 'react'
import { css } from 'aphrodite'
import { styles } from  './stylesheet/stylesheet-stores.js'

const UpdateStoreForm = (props) => {
	return (
		<div className= {props.className}>
			<form style={{display: 'block', justifyContent: 'left'}}>
				<h2>Store Name <input value={props.name}></input></h2>
				<h3>Store Number {props.number}</h3> 
				<h3>Store Address <input value={props.address}></input></h3>
				<h3>Store City <input value={props.city}></input></h3>
				<h3>Store State <input value={props.state}></input></h3>
				<h3>Store Zip <input value={props.zip}></input></h3>
			</form>
		</div>
		

		)
}
export default UpdateStoreForm