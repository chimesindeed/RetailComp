import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import { styles } from  './stylesheet/stylesheet-stores.js'
import Store from './Store'
import { asyncFetchStores, asyncFetchStore } from './redux/actions'

class StoresContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			flipped: "allStores"
		}
	}
	componentDidMount = () => {
		this.props.asyncFetchStores();
	}
	selectStore = value => () => {
		this.props.asyncFetchStore(value);
		this.setState({flipped: "clickedStore"})
	}
	
	handleBackPressed = () => {
		this.setState({flipped: "allStores"})
	}
		
	
	render = () => {
		return (
			<div>
				<div className={css(styles.discountsLink)}><Link to={"/discounts"}>DISCOUNTS</Link></div>
				{
					this.state.flipped==="allStores"
						?
							(
					this.props.allStores.map((store)=>{
						return(
							<div key={store.id} onClick={this.selectStore(store.id)}>
								<Store
									id={store.id}
									number={store.number}
									name={store.name}
									address={store.address}
									city={store.city}
									state={store.state}
									zip={store.zip}
								/>
							</div>
						)	
					})
							)

						:

							(
					
							<div>
								<Store
									id={this.props.selectedStore.id}
									number={this.props.selectedStore.number}
									name={this.props.selectedStore.name}
									address={this.props.selectedStore.address}
									city={this.props.selectedStore.city}
									state={this.props.selectedStore.state}
									zip={this.props.selectedStore.zip}
								/>
								<div><button onClick={this.handleBackPressed}>back</button></div>
							</div>

						)
					}
			</div>
		)

	}

}

	const mapStateToProps = (state) => {
		return ({allStores: state.stores, selectedStore: state.store})
	}
export default connect(mapStateToProps, {asyncFetchStores, asyncFetchStore})(StoresContainer)