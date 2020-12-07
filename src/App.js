import React from 'react'
import Header from './Header'
import DiscountsContainer from './DiscountsContainer'
import StoresContainer from './StoresContainer'
import {Switch, BrowserRouter, Route} from 'react-router-dom'


const App = (props) => {
  return (
  	<BrowserRouter>
  		<Switch>
    	<Route path= "/" exact component= {Header} />
    	<Route path= "/discounts" component= {DiscountsContainer} />
    	<Route path= "/stores" component= {StoresContainer} />
		</Switch>    
    </BrowserRouter>
    )
}

export default App
