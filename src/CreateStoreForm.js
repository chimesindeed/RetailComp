import React from 'react'
import * as ADAPTER from './adapter.js'
import { connect } from 'react-redux'
import { GET_STORE, SELECTED_STORE } from './redux/actions'
import { Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

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
					.then(this.props.history.push('/stores'))
		)

	}
		
	render = () => { 
		return(
		
<div>

<Form onSubmit={this.handleSubmit} style={{justifyContent: 'center', marginLeft: 7}}>
<Form.Group>
	<Form.Input label= 'Store Name' onChange={(e)=>{this.setState({name: e.target.value})}}value={this.state.name} width={3} />
	<Form.Input label= '#' onChange={(e)=>{this.setState({number: e.target.value})}}value={this.state.number} width={1}/> 
</Form.Group>
<Form.Input label= 'Address' onChange={(e)=>{this.setState({address: e.target.value})}}value={this.state.address} width={4} />
<Form.Group>
<Form.Input label= 'City' onChange={(e)=>{this.setState({city: e.target.value})}}value={this.state.city} width={2}/>
<Form.Input label= 'State' onChange={(e)=>{this.setState({state: e.target.value})}}value={this.state.state} width={1} />
<Form.Input label= 'Zip' onChange={(e)=>{this.setState({zip: e.target.value})}}value={this.state.zip} width={2}/>
</Form.Group>
<Form.Button type='submit'>Create Store</Form.Button>
</Form>
			</div>
			  )
	}
}
const mapStateToProps=(state)=>{ 
	return ({store: state.store}) }

export default withRouter(connect(mapStateToProps, { GET_STORE, SELECTED_STORE })(CreateStoreForm))