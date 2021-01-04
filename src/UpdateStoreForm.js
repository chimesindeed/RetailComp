import React from 'react'
import * as ADAPTER from './adapter.js'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
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
		
	<div>

<Form onSubmit={this.handleSubmit} style={{justifyContent: 'left', marginLeft: 7}}>
	<Form.Group>
		<Form.Input label= 'Store Name' onChange={(e)=>{this.setState({name: e.target.value})}} placeholder={this.props.name} value={ this.state.name !== "" ? this.state.name.toLowerCase() : this.props.name} width={3}/>
		<Form.Input label= '#' placeholder={this.props.number} disabled width = {1}/> 
	</Form.Group>
	<Form.Input label= 'Address' onChange={(e)=>{this.setState({address: e.target.value})}} placeholder={this.props.address} value={ this.state.address !== "" ? this.state.address : this.props.address} width={4}/>
	<Form.Group>
		<Form.Input label= 'City'  onChange={(e)=>{this.setState({city: e.target.value})}}placeholder={this.props.city} value={ this.state.city !== "" ? this.state.city : this.props.city} width={2}/>
		<Form.Input label= 'State' onChange={(e)=>{this.setState({state: e.target.value})}}placeholder={this.props.state} value={ this.state.state !== "" ?this.state.state : this.props.state} width={1}/>
		<Form.Input label= 'Zip' 	 onChange={(e)=>{this.setState({zip: e.target.value})}}placeholder={this.props.zip} value={ this.state.zip !== "" ? this.state.zip: this.props.zip} width={2}/>
	</Form.Group>
	<Form.Button type='submit'>Update</Form.Button>
</Form>
			</div>
			  )
	}
}

export default connect(null, { GET_STORE, SELECTED_STORE })(UpdateStoreForm)