import React from 'react'
import { connect } from 'react-redux'
import { css } from 'aphrodite'
import { styles } from  './stylesheet/stylesheet-discounts.js'
import { INCREMENT, TO_ONE } from './redux/actions'
import { Link } from 'react-router-dom'
import * as Util from './util/util'
import Discounts from './Discounts'
import {Pink} from './color-components/EPink'
import {Yellow} from './color-components/AYellow'
import {Green} from './color-components/BGreen'
import {Blue} from './color-components/CBlue'
import {White} from './color-components/DWhite'
import * as Extras from './color-components/extras/IncomingAndRagout'

class DiscountsContainer extends React.Component {

	setWeek = (dPassed = Util.daysPassed()) => {
		if(dPassed >=7){
			// eslint-disable-next-line no-unused-expressions
			this.props.week === 5
				?
					(
						Util.startingDate.setDate(Util.startingDate.getDate() + 7),
						this.props.TO_ONE(),
						setTimeout(()=>this.setWeek(), 300)
					)
				:
					(
						Util.startingDate.setDate(Util.startingDate.getDate() + 7),
						this.props.INCREMENT(),
						setTimeout(()=>this.setWeek(), 300)
					)
		}
	}
	componentDidMount = () => {
		return this.setWeek()
	}
	renderDiscounts = (week) => {
		 switch(week){
			case 5: return(
				<Discounts>
					<Pink><Extras.IncomingPink/></Pink>
				</Discounts>
			)
			case 1: return(
				<Discounts>
					<Yellow><Extras.IncomingYellow/></Yellow>
				</Discounts>
			)
			case 2: return(
				<Discounts>
					<Green><Extras.IncomingGreen/></Green>
				</Discounts>
			)
			case 3: return(
				<Discounts>
					<Blue><Extras.IncomingBlue/></Blue>
				</Discounts>
			)
			case 4: return(
				<Discounts>
					<White><Extras.IncomingWhite/></White>
				</Discounts>
			)
			default: return(
				<h1>default</h1>
			)
		}
		
	}
	render = () => {
		return(
			<div>
				<div className={css(styles.storesLink)}><Link to={"/stores"}>STORES</Link></div>
				{this.renderDiscounts(this.props.week)}
			</div>
		)
	}
}

const mapStateToProps=(state)=>{ return ({week: state.week}) }

export default connect(mapStateToProps, {INCREMENT, TO_ONE})(DiscountsContainer)
