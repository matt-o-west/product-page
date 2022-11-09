//Firebase Config

// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app'
import { getFirestore } from '@firebase/firestore'
//import * as firebase from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCp6gvwHYFXVU88hCYjK0CzGPMEqp5f1eA',
  authDomain: 'shopping-cart-d2e9e.firebaseapp.com',
  projectId: 'shopping-cart-d2e9e',
  storageBucket: 'shopping-cart-d2e9e.appspot.com',
  messagingSenderId: '445024795050',
  appId: '1:445024795050:web:6a3252c4cea4f4c84f13d3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
