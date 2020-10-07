import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAjSn2vLZzvirAv3dpXc876ho7mEueiDJU",
    authDomain: "routeauth-23f35.firebaseapp.com",
    databaseURL: "https://routeauth-23f35.firebaseio.com",
    projectId: "routeauth-23f35",
    storageBucket: "routeauth-23f35.appspot.com",
    messagingSenderId: "409481039070",
    appId: "1:409481039070:web:59355b0f14c65444cdc64f"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire ;