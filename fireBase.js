var app_fireBase = {};

(function(){



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCadunnhuGuN-xWHsgvdukh4VmrjdtlhNY",
    authDomain: "myfirstweb-227310.firebaseapp.com",
    databaseURL: "https://myfirstweb-227310.firebaseio.com",
    projectId: "myfirstweb-227310",
    storageBucket: "",
    messagingSenderId: "804820800931"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;
})()