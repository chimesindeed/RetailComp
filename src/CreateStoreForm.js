import React from 'react'
import * as ADAPTER from './adapter.js'
import { connect } from 'react-redux'
import { GET_STORE, SELECTED_STORE } from './redux/actions'

class CreateStoreForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: null,
			address: null,
			number: null,
			city: null,
			state: null,
			zip: null,
		}
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		
		const name = this.state.name
		const number = this.state.number
		const address = this.state.address
		const city = this.state.city
		const state = this.state.state
		const zip = this.state.zip
		return(
			ADAPTER.createStore(
				name,
				number,
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
		
			<div>
				<form onSubmit={this.handleSubmit} style={{justifyContent: 'left'}}>
<h2><label>Store Name <input onChange={(e)=>{this.setState({name: e.target.value})}} placeholder={this.props.name}/></label></h2>
<h3><label>Store Number <input onChange={(e)=>{this.setState({name: e.target.value})}}placeholder={this.props.number} /></label></h3> 
<h3><label>Store Address <input onChange={(e)=>{this.setState({address: e.target.value})}}placeholder={this.props.address}/></label></h3>
<h3><label>Store City <input onChange={(e)=>{this.setState({street: e.target.value})}}placeholder={this.props.city}/></label></h3>
<h3><label>Store State <input onChange={(e)=>{this.setState({state: e.target.value})}}placeholder={this.props.state}/></label></h3>
<h3><label>Store Zip <input onChange={(e)=>{this.setState({zip: e.target.value})}}placeholder={this.props.zip}/></label></h3>
					<input type='submit' value='Create Store'/>
				</form>
			</div>
			  )
	}
}
const mapStateToProps=(state)=>{ 
	return ({store: state.store}) }

export default connect(mapStateToProps, { GET_STORE, SELECTED_STORE })(CreateStoreForm)