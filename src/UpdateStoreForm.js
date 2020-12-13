import React from 'react'

const handleSubmit = (e) => {
	e.preventDefault()
	return(alert("hi"))
}

const UpdateStoreForm = (props) => {
	return (
		<div className= {props.className}>
			<form onSubmit={handleSubmit} style={{justifyContent: 'left'}}>
				<h2><label>Store Name <input value={props.name}/></label></h2>
				<h3><label>Store Number <input value={props.number} disabled/></label></h3> 
				<h3><label>Store Address <input value={props.address}/></label></h3>
				<h3><label>Store City <input value={props.city}/></label></h3>
				<h3><label>Store State <input value={props.state}/></label></h3>
				<h3><label>Store Zip <input value={props.zip}/></label></h3>
				<input type='submit' value='Update Store'/>
			</form>
		</div>
		

		)
}
export default UpdateStoreForm