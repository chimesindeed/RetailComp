import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import { styles } from  './stylesheet/stylesheet-stores.js'
import Store from './Store'
import UpdateStoreForm from './UpdateStoreForm'
import { asyncFetchStores, asyncFetchStore } from './redux/actions'
import { deleteStore } from './adapter.js'

class StoresContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			toggle: "allStores"
		}
	}
	componentDidMount = () => {
		this.props.asyncFetchStores();
	}

	selectStore = value => () => {
		this.props.asyncFetchStore(value);
		this.setState({toggle: "clickedStore"})
	}
	
	handleBackPressed = () => {
		this.setState({toggle: "allStores"})
	}
	handleDeletePressed = () => {
		deleteStore(this.props.selectedStore.id)
		.then(this.props.asyncFetchStores)
		.then(this.setState({toggle: "allStores"}))
	}
	handleEditPressed = () => {
		this.setState({toggle: "updateStore"})
	}

		renderStores = () => {
			
			switch(this.state.toggle){
				case "allStores": return (this.props.allStores.map((store)=>{
					return(
						<div key={store.id} onDoubleClick={this.selectStore(store.id)}>
							<Store className={css(styles.stores)}
								id={store.id}
								number={store.number}
								name={store.name}
								address={store.address}
								city={store.city}
								state={store.state}
								zip={store.zip}
							/>
							<div className={css(styles.storeDivider)} />
						</div>
							)
					})
				);	
				case "clickedStore": return (
					<div>
						<Store className={css(styles.store)}
							id={this.props.selectedStore.id}
							number={this.props.selectedStore.number}
							name={this.props.selectedStore.name}
							address={this.props.selectedStore.address}
							city={this.props.selectedStore.city}
							state={this.props.selectedStore.state}
							zip={this.props.selectedStore.zip}
						/>
						<div className={css(styles.optionsDiv)}>
							<button onClick={this.handleBackPressed}>back</button>
							<button onClick={this.handleDeletePressed}>delete</button>
							<button onClick={this.handleEditPressed}>edit</button>
						</div>
					</div>
				)

				case "updateStore": return (
					<div>
						<UpdateStoreForm className={css(styles.updateForm)}
							id={this.props.selectedStore.id}
							number={this.props.selectedStore.number}
							name={this.props.selectedStore.name}
							address={this.props.selectedStore.address}
							city={this.props.selectedStore.city}
							state={this.props.selectedStore.state}
							zip={this.props.selectedStore.zip}
						/>
						<div className={css(styles.optionsDiv)}>
								<button onClick={this.handleBackPressed}>back</button>
						</div>
					</div>
				)
				default: return("hi")
			}
		}

	
	render = () => {
		return (
			<div>
				<div className={css(styles.discountsLink)}>
					<Link to={"/discounts"}>DISCOUNTS</Link>
				</div>

				{this.renderStores()}

			</div>
		)
	}

}

	const mapStateToProps = (state) => {
		return ({allStores: state.stores, selectedStore: state.store})
	}
export default connect(mapStateToProps, {asyncFetchStores, asyncFetchStore})(StoresContainer)