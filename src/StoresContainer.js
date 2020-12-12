import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite'
import { styles } from  './stylesheet/stylesheet-stores.js'
import Store from './Store'
import { asyncFetchStores, asyncFetchStore} from './redux/actions'
import { asyncDeleteStore } from './adapter.js'

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
		asyncDeleteStore(this.props.selectedStore.id)
		this.setState({toggle: "allStores"})
	}

		renderStores = () => {
			return(
				this.state.toggle==="allStores"
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
								<div>
									<button onClick={this.handleBackPressed}>back</button>
									<button onClick={this.handleDeletePressed}>delete</button>
									<button onClick={this.handleBackPressed}>update</button>
								</div>
							</div>

						)
			)

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