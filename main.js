var mainApp = {};

(function(){
    // var firebase = app_fireBase;
var uid = null;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });

      function logOut(){
          firebase.auth().signOut();
          console.log("run log out");
          console.log(uid + "sdlfjs");
      }
      console.log(uid + "  sdlfjs");
      console.log("run log out ok");
      mainApp.logOut = logOut;
})()
