import React from 'react'
import * as ADAPTER from './adapter.js'
import { connect } from 'react-redux'
import { GET_STORE, SELECTED_STORE } from './redux/actions'

class UpdateStoreForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: "",
			address: "",
			city: "",
			state: "",
			zip: ""
		}
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		let name; let address; let city; let state; let zip;
		this.state.name==="" ? name = this.props.name : name = this.state.name
		this.state.address==="" ? address = this.props.address : address = this.state.address
		this.state.city==="" ? city = this.props.city : city = this.state.city
		this.state.state==="" ? state = this.props.state: state= this.state.state
		this.state.zip==="" ? zip = this.props.zip : zip = this.state.zip
		return(
			ADAPTER.updateStore(
				this.props.id,
				name,
				address, 
				city,
				state,
				zip
			
			).then(res=>{this.props.GET_STORE(res)})
			.then(this.props.SELECTED_STORE())

		)

	}
		
	render = () => {
		return(
		
			<div className= {this.props.className}>
				<form onSubmit={this.handleSubmit} style={{justifyContent: 'left'}}>
<h2><label>Store Name <input onChange={(e)=>{this.setState({name: e.target.value})}} placeholder={this.props.name} value={this.state.name != null ? this.state.name.toLowerCase() : this.state.name}/></label></h2>
<h3><label>Store Number <input placeholder={this.props.number} disabled/></label></h3> 
<h3><label>Store Address <input onChange={(e)=>{this.setState({address: e.target.value})}}placeholder={this.props.address}value={this.state.address}/></label></h3>
<h3><label>Store City <input onChange={(e)=>{this.setState({city: e.target.value})}}placeholder={this.props.city}value={this.state.city}/></label></h3>
<h3><label>Store State <input onChange={(e)=>{this.setState({state: e.target.value})}}placeholder={this.props.state}value={this.state.state}/></label></h3>
<h3><label>Store Zip <input onChange={(e)=>{this.setState({zip: e.target.value})}}placeholder={this.props.zip}value={this.state.zip}/></label></h3>
					<input type='submit' value='Update Store'/>
				</form>
			</div>
			  )
	}
}

export default connect(null, { GET_STORE, SELECTED_STORE })(UpdateStoreForm)