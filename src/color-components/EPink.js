import React from 'react'
import  { styles } from '../stylesheet/stylesheet'
import { css } from 'aphrodite'


export const Pink = (props) =>(
	<div className= {css(styles.discountBackground)}>
		<div className= {css(styles.discountHeader)}>Discounts {props.children}<div className={css(styles.discountFiller)}></div></div>
		<div className= {css(styles.highlightBlue)}>50% OFF Blue</div>
		<div className= {css(styles.discountFiller)}></div>
		<div className= {css(styles.highlightGreen)}>50% OFF Green</div>
		<div className= {css(styles.discountFiller)}></div>
		<div className= {css(styles.highlightYellow)}>Yellow 99 Cents</div>
	</div>
)
	
