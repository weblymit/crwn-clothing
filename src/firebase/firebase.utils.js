import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC8qzQUtfCrEVd_qPhHrVy-_cjBtPpTHqU',
	authDomain: 'crwn-db-f74be.firebaseapp.com',
	databaseURL: 'https://crwn-db-f74be.firebaseio.com',
	projectId: 'crwn-db-f74be',
	storageBucket: '',
	messagingSenderId: '979353368065',
	appId: '1:979353368065:web:44e910c6be7b97d5'
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

// google auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase