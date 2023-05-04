import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCxnrHYF5W4bZYih7QTvFiVRFuz7eoE9_8",
  authDomain: "chat-web-app-7748e.firebaseapp.com",
  projectId: "chat-web-app-7748e",
  storageBucket: "chat-web-app-7748e.appspot.com",
  messagingSenderId: "602032636013",
  appId: "1:602032636013:web:764dccd1b188f7c8017f64"
};

// Initialize Firebase
const app = firebase.initializeApp(config);
export const auth =app.auth();
export const database= app.database();
export const storage =app.storage();
export const messaging=firebase.messaging.isSupported()? app.messaging():null;
if(messaging){
  messaging.usePublicVapidKey('BKP9RCl0565_9q8TUHcA3CtGlwT13UfjtS3stHEmary9Rs27gC7o0Nqco3oiTk9nJW21SuBINVPLECICd2Z2eXE');
  messaging.onMessage((data)=>{
    console.log(data);
  })

}

