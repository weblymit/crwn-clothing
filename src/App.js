import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shopage from './pages/shop/shoppage.component'

function App() {
	return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shopage}/>
      </Switch>
			{/* <HomePage /> */}
		</div>
	);
}

export default App;
