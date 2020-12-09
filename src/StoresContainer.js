import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
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
		return (
			<div>
				<li><Link to={"/discounts"}>DISCOUNTS</Link></li>
				{
					this.props.allStores.map((store)=>{
						return (
							<Store
								id={store.id}
								number={store.number}
								name={store.name}
								address={store.address}
								city={store.city}
								state={store.state}
								zip={store.zip}
							/>
						)	
					})
				}
			</div>
		)

	}

}

	const mapStateToProps = (state) => {
		return ({allStores: state.stores})
	}
export default connect(mapStateToProps, {asyncFetchStores})(StoresContainer)