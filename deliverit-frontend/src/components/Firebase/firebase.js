import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCO9fQOr--1mcq1cHiFkPpRlpJZGuDpp1U",
    authDomain: "deliverit-plattsburgh.firebaseapp.com",
    databaseURL: "https://deliverit-plattsburgh.firebaseio.com",
    projectId: "deliverit-plattsburgh",
    storageBucket: "deliverit-plattsburgh.appspot.com",
    messagingSenderId: "582254113997"
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
	}

	// *** Auth API ***
	doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  	doPasswordUpdate = password =>  this.auth.currentUser.updatePassword(password);
}

export default Firebase