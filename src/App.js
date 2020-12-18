import React from 'react'
import Header from './Header'
import DiscountsContainer from './DiscountsContainer'
import StoresContainer from './StoresContainer'
import CreateStoreForm from './CreateStoreForm'
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'


const App = (props) => {
  return (
  	<BrowserRouter>
  		<Header />
  		
  		<Switch>
  			<Route exact path= "/">
  				<Redirect to = "/discounts"/>
  			</Route>

    		<Route path= "/discounts" exact component={DiscountsContainer}/>
    		
    		<Route path= "/stores" exact component={StoresContainer}/>
        
        <Route exact path= "/create">
          <Redirect to = "/stores/create"/>
        </Route>

        <Route path= "/stores/create" exact component={CreateStoreForm}/>
		</Switch>    
    </BrowserRouter>
    )
}

export default App
