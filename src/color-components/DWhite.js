import React from 'react'
import { styles } from '../stylesheet/stylesheet-discounts'
import { css } from 'aphrodite'


export const White = (props) =>(
	<div className= {css(styles.discountBackground)}>
		<div className= {css(styles.discountHeader)}>Discounts {props.children}<div className={css(styles.discountFiller)}></div></div>
		<div className= {css(styles.highlightGreen)}>50% OFF Green</div>
		<div className= {css(styles.discountFiller)}></div>
		<div className= {css(styles.highlightYellow)}>50% OFF Yellow</div>
		<div className= {css(styles.discountFiller)}></div>
		<div className= {css(styles.highlightPink)}>Pink 99 Cents</div>
	</div>
)
	
