import React from 'react'
import { styles } from '../stylesheet/stylesheet'
import { css } from 'aphrodite'


export const Green = (props) => (
	<div className= {css(styles.discountBackground)}>
		<div className= {css(styles.discountHeader)}>Discounts {props.children}</div>
		<div className= {css(styles.highlightPink)}>50% OFF Pink</div>
		<div className= {css(styles.discountFiller)}></div>
		<div className= {css(styles.highlightWhite)}>50% OFF White</div>
		<div className= {css(styles.discountFiller)}></div>
		<div className= {css(styles.highlightBlue)}>Blue 99 Cents</div>
	</div>
)
	
