import React from 'react'
import Header from './Header'
import DiscountsContainer from './DiscountsContainer'
import StoreListContainer from './StoreListContainer'
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {
  return (
  	<BrowserRouter>
    	<Route path = "/" component={Header} />
    	<Route path = "/discounts" component={DiscountsContainer} />
    	<Route path = "/stores" component={StoreListContainer} />
    </BrowserRouter>
    )
}

export default App
