import React from 'react'
import {connect} from 'react-redux'
import Store from './Store'
import { asyncFetchStores } from './redux/actions'

class StoresContainer extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount = () => {
		this.props.asyncFetchStores();
	}
	
	render = () => {
		return (this.props.allStores.map((store)=>{
			return<Store
					id={store.id}
					number={store.number}
					name={store.name}
					address={store.address}
					city={store.city}
					state={store.state}
					zip={store.zip}/>}))

	}

}

	const mapStateToProps = (state) => {
		return ({allStores: state.stores})
	}
export default connect(mapStateToProps, {asyncFetchStores})(StoresContainer)