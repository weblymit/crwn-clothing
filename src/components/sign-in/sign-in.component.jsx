import React, { Component } from 'react';
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			passsword: ''
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: '', passsword: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>J'ai deja un compte</h2>
				<span>Se connecter avec votre E-mail et Mot de passe</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						label="email"
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						name="password"
						type="password"
						value={this.state.email}
						label="password"
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Envoyer</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							{' '}
							Sign In with Google {' '}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
