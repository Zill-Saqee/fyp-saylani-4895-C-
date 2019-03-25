import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjmOsnCoTvvHL92B5zOQaWSVFHL6zphCo",
    authDomain: "ecommerce-fcc71.firebaseapp.com",
    databaseURL: "https://ecommerce-fcc71.firebaseio.com",
    projectId: "ecommerce-fcc71",
    storageBucket: "ecommerce-fcc71.appspot.com",
    messagingSenderId: "750550125398"
  };
  firebase.initializeApp(config);

  const storage=firebase.storage();

  export {
      storage,firebase as default
  }