import React from 'react'
import * as ADAPTER from './adapter.js'
import { connect } from 'react-redux'
import { GET_STORE } from './redux/actions'

class UpdateStoreForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: null,
			address: null,
			city: null,
			state: null,
			zip: null
		}
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		let name; let address; let city; let state; let zip;
		this.state.name===null ? name = this.props.name : name = this.state.name
		this.state.address===null ? address = this.props.address : address = this.state.address
		this.state.city===null ? city = this.props.city : city = this.state.city
		this.state.state===null ? state = this.props.state: state= this.state.state
		this.state.zip===null ? zip = this.props.zip : zip = this.state.zip
		return(
			ADAPTER.updateStore(
				this.props.id,
				name,
				address, 
				city,
				state,
				zip
			).then(res=>{this.props.GET_STORE(res)})
			
		)

	}
		
	render = () => {
		return (
			<div className= {this.props.className}>
				<form onSubmit={this.handleSubmit} style={{justifyContent: 'left'}}>
<h2><label>Store Name <input onChange={(e)=>{this.setState({name: e.target.value})}} placeholder={this.props.name}/></label></h2>
<h3><label>Store Number <input placeholder={this.props.number} disabled/></label></h3> 
<h3><label>Store Address <input onChange={(e)=>{this.setState({address: e.target.value})}}placeholder={this.props.address}/></label></h3>
<h3><label>Store City <input onChange={(e)=>{this.setState({street: e.target.value})}}placeholder={this.props.city}/></label></h3>
<h3><label>Store State <input onChange={(e)=>{this.setState({state: e.target.value})}}placeholder={this.props.state}/></label></h3>
<h3><label>Store Zip <input onChange={(e)=>{this.setState({zip: e.target.value})}}placeholder={this.props.zip}/></label></h3>
					<input type='submit' value='Update Store'/>
				</form>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return({store: state.store})
}
export default connect(mapStateToProps, { GET_STORE })(UpdateStoreForm)