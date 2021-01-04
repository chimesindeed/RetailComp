import React from 'react'
import { Card } from 'semantic-ui-react'


const Store = (props) => {
	const address = [ props.city, <br />, 
									 	props.address, <br />,
									 	props.state, <br />,
									 	props.zip
									]
	const storeNumber = [	'Store ',
												props.number
											]
	return (
			<Card
				style={{marginLeft: 7, marginTop: 5, backgroundColor: 'Cornsilk'}}
				color='orange'
				header={props.name}
				meta={storeNumber}
				description= {address}
			/>
	)
}
export default Store