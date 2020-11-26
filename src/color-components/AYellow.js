import React from 'react'
import { styles } from '../stylesheet/stylesheet'
import { css } from 'aphrodite'

export const Yellow = (props) => (
	<div className= {css(styles.discountBackground)}>
		<div className= {css(styles.discountHeader)}>Discounts {props.children}</div>
		<div className= {css(styles.highlightWhite)}>50% OFF White</div>
		<div className= {css(styles.discountFiller)}></div>
		<div className= {css(styles.highlightBlue)}>50% OFF Blue</div>
		<div className= {css(styles.discountFiller)}></div>
		<div className= {css(styles.highlightGreen)}>Green 99 Cents</div>
	</div>
)
	
