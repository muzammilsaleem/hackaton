const firebaseConfig = {
  apiKey: "AIzaSyBrhqp07BCcRASpNQUYnhSkuNnruGN7f3A",
  authDomain: "muzzmilballon.firebaseapp.com",
  projectId: "muzzmilballon",
  storageBucket: "muzzmilballon.appspot.com",
  messagingSenderId: "445441914574",
  appId: "1:445441914574:web:dade8fe6b8e0fbda69829f",
  measurementId: "G-VY7KT6M7WE"
  };
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      location.replace("index.html");
    } else {
  document.getElementById("user").innerHTML= "Hello, "+ user.email;
  console.log(useremail);
    }
  });

function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}