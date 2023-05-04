/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebase.js/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebase.js/8.10.0/firebasemessaging.js');

firebase.intializeApp(
    {
        apiKey: "AIzaSyCxnrHYF5W4bZYih7QTvFiVRFuz7eoE9_8",
        authDomain: "chat-web-app-7748e.firebaseapp.com",
        projectId: "chat-web-app-7748e",
        storageBucket: "chat-web-app-7748e.appspot.com",
        messagingSenderId: "602032636013",
        appId: "1:602032636013:web:764dccd1b188f7c8017f64"
    });
firebase.messaging();