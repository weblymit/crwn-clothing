import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shopage from './pages/shop/shoppage.component';
import Header from './components/header-component/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// onSnapshot=onAuthStateChanged
				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shopage} />
					<Route path="/signin" component={SignInSignUpPage} />
				</Switch>
				{/* <HomePage /> */}
			</div>
		);
	}
}

export default App;
