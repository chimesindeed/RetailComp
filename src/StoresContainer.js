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
		const arr=[{title: "title"}, {title: "title2"}]
		return (this.props.allStores.map(el=><li>{el.store_title}</li>))

	}}

	const mapStateToProps = (state) => {
		return ({allStores: state.stores})
	}
export default connect(mapStateToProps, {asyncFetchStores})(StoresContainer)