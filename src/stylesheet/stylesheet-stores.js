import { StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
	
	discountsLink: {
		textAlign: 'right',
		backgroundColor: 'maroon',
		color: 'white'

	},

	stores: {
		backgroundColor: 'lightgreen',
		color: 'black',
		paddingLeft: 20,
		overflow: 'hidden',
		overflowY: 'scroll',
		overflowStyle: 'scrollbar'
	},

	store: {
		backgroundColor: 'coral',
		color: 'blue',
		textAlign: 'center',
	},

	updateForm: {
		backgroundColor: 'coral',
		color: 'blue',
		textAlign: 'center'
	},

	optionsDiv: {
		display: 'flex',
		justifyContent: 'center'
	},

	storeDivider: {
		width: '300px',
		height: '2px',
		color: 'grey'
	}

});
