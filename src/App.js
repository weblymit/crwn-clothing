import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shopage from './pages/shop/shoppage.component'
import Header from './components/header-component/header.component'

function App() {
	return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shopage}/>
      </Switch>
			{/* <HomePage /> */}
		</div>
	);
}

export default App;
