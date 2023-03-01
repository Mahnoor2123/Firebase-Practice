function Login(){
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
 if (email == "" || password == "") {
    window.alert("enter all fields")
 }
 else{
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem('userId', user.uid)
    window.location.href="../Home.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage)
  });

 }

}