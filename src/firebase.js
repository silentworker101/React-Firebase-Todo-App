
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBPvt1FB3d2Q8MebZIFg498UbqLhu9zR9M",
    authDomain: "todo-app-91b22.firebaseapp.com",
    databaseURL: "https://todo-app-91b22.firebaseio.com",
    projectId: "todo-app-91b22",
    storageBucket: "todo-app-91b22.appspot.com",
    messagingSenderId: "166092205207",
    appId: "1:166092205207:web:8909560cb4ff1b0f25cdd2",
    measurementId: "G-XC2K0DPTVY"

  });

  const db = firebaseApp.firestore();

  export default db;