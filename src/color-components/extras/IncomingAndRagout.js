import React from 'react'
import { styles } from '../../stylesheet/stylesheet-discounts'
import { css } from 'aphrodite'

export const IncomingYellow = () =>(
	<div className={css(styles.incomingText)}> || ic yellow, r/o green, nw r/o blue</div>
)
export const IncomingGreen = () => (
	<div className={css(styles.incomingText)}> || ic green, r/o blue, nw r/o white</div>
)
export const IncomingBlue = () => (
	<div className={css(styles.incomingText)}> || ic blue, r/o white, nw r/o pink</div>
)
export const IncomingWhite = () => (
	<div className={css(styles.incomingText)}> || ic white r/o pink, nw r/o yellow</div>
)
export const IncomingPink = () => (
	<div className={css(styles.incomingText)}> || ic pink, r/o yellow nw r/o green</div>
)