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
<h2>Store Name <input onChange={(e)=>{this.setState({name: e.target.value})}}/></h2>
<h3>Store Number <input onChange={(e)=>{this.setState({number: e.target.value})}}/></h3> 
<h3>Store Address <input onChange={(e)=>{this.setState({address: e.target.value})}}/></h3>
<h3>Store City <input onChange={(e)=>{this.setState({city: e.target.value})}}/></h3>
<h3>Store State <input onChange={(e)=>{this.setState({state: e.target.value})}}/></h3>
<h3>Store Zip <input onChange={(e)=>{this.setState({zip: e.target.value})}}/></h3>
					<input type='submit' value='Create Store'/>
				</form>
			</div>
			  )
	}
}
const mapStateToProps=(state)=>{ 
	return ({store: state.store}) }

export default connect(mapStateToProps, { GET_STORE, SELECTED_STORE })(CreateStoreForm)