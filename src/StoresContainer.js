import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import { styles } from  './stylesheet/stylesheet-stores.js'
import Store from './Store'
import UpdateStoreForm from './UpdateStoreForm'
import { asyncFetchStores, asyncFetchStore, ALL_STORES, SELECTED_STORE, UPDATE_STORE } from './redux/actions'
import { deleteStore } from './adapter.js'

class StoresContainer extends React.Component {

	componentDidMount = () => {
		this.props.asyncFetchStores();
	}

	selectStore = value => () => {
		this.props.asyncFetchStore(value);
		this.props.SELECTED_STORE()
	}
	
	handleBackPressed = () => {
		this.props.asyncFetchStores();
		this.props.ALL_STORES()
	}
	handleExitUpdate = () => {
		this.props.SELECTED_STORE()
	}

	handleDeletePressed = () => {
		deleteStore(this.props.selectedStore.id)
		.then(this.props.asyncFetchStores)
		.then(this.props.ALL_STORES())
	}
	handleEditPressed = () => {
		this.props.UPDATE_STORE()
	}

		renderStores = () => {
			
			switch(this.props.toggle){
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
						<div className={css(styles.optionsDiv)}>
							<button onClick={this.handleBackPressed}>back</button>
							<button onClick={this.handleDeletePressed}>delete</button>
							<button onClick={this.handleEditPressed}>edit</button>
						</div>
						<Store className={css(styles.store)}
							id={this.props.selectedStore.id}
							number={this.props.selectedStore.number}
							name={this.props.selectedStore.name}
							address={this.props.selectedStore.address}
							city={this.props.selectedStore.city}
							state={this.props.selectedStore.state}
							zip={this.props.selectedStore.zip}
						/>
					</div>
				)

				case "updateStore": return (
					<div>
						<div className={css(styles.optionsDiv)}>
								<button onClick={this.handleExitUpdate}>back</button>
						</div>
						<UpdateStoreForm className={css(styles.updateForm)}
							id={this.props.selectedStore.id}
							number={this.props.selectedStore.number}
							name={this.props.selectedStore.name}
							address={this.props.selectedStore.address}
							city={this.props.selectedStore.city}
							state={this.props.selectedStore.state}
							zip={this.props.selectedStore.zip}
						/>
						
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
		return ({
			allStores: state.stores,
			selectedStore: state.store,
			toggle: state.toggle
		})
	}
export default connect(mapStateToProps,
	{
		asyncFetchStores,

		asyncFetchStore,

		ALL_STORES,

		SELECTED_STORE,

		UPDATE_STORE

	})(StoresContainer)