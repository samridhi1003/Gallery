 var firebaseConfig = {
    apiKey: "AIzaSyDqBk-udpuia0lTR7c8NRUWJb9Y3uPvM_c",
    authDomain: "brdm-bus-service.firebaseapp.com",
    databaseURL: "https://brdm-bus-service.firebaseio.com",
    projectId: "brdm-bus-service",
    storageBucket: "brdm-bus-service.appspot.com",
    messagingSenderId: "680196580992",
    appId: "1:680196580992:web:8c31e1c9d244b6b5e4e865",
    measurementId: "G-BK94LEYH8S"
  };

  firebase.initializeApp(firebaseConfig);
  // var firestore= firebase.firestore();
  const auth = firebase.auth();

  	var email= document.getElementById("email");
  	var password = document.getElementById("password");
  	// const db =firestore.collection("collectData");
  function signUp(){


  	const promise= auth.createUserWithEmailAndPassword(email.value,password.value);
  	promise.catch(e=>alert(e.message));
  	console.log("signed up!");
  }
  function logIn(){
    const promise= auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    console.log("logged in!");

  }
  // auth.onAuthStateChanged(function(user){
  //   if(user){
  //     var email= user.email;
  //     alert("Active User"+ email);
  //     //Take usrr to a different or home page
  //     //is signed in
  //   }
  //   else{
  //     alert("No active user");
  //   }
  // });
 function googlesignin(){
     console.log("hello");
    var provider= new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    //   console.log(result);

    // }).catch(function(err){
    //   console.log(err);
    //   console.log("failed to do");
    // })
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
  }