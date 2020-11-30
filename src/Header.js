 
import React from 'react'
import { styles } from  './stylesheet/stylesheet'
import { css } from 'aphrodite'

const Header = () => {
	return (
		<div className={css(styles.background)}>
			<div>
				<div className={css(styles.text)}>Salvation Army</div>
				<div className={css(styles.text2)}></div>
			</div>
			
			<div>

			</div>
		</div>
		)
}
export default Header