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
		return (this.props.allStores.map((store)=>{return<Store title={store.store_title} id={store.id}/>}))

	}

}

	const mapStateToProps = (state) => {
		return ({allStores: state.stores})
	}
export default connect(mapStateToProps, {asyncFetchStores})(StoresContainer)