document.addEventListener('DOMContentLoaded', function() {

var uidOfUser;


document.getElementById("signUpBtn").addEventListener("click", function(){

  if(document.getElementById('userEmail').value == '' || document.getElementById('userPassword').value == ''){
    alert('Please double check the email and password fields');
  }

  else{
        firebase.auth().createUserWithEmailAndPassword(document.getElementById('userEmail').value, document.getElementById('userPassword').value)
        .then(function(user){
          

          console.log('current user uid is...' + firebase.auth().currentUser.uid);
          //var currEmail = firebase.auth().currentUser.getEmail();

          /*firebase.database().ref().child("users/" + firebase.auth().currentUser.uid).set({
             

          })*/
          var newUserKey = firebase.database().ref().child('users').push().key;
                var updates = {};
                updates['users/' + firebase.auth().currentUser.uid] = newUserKey;

                firebase.database().ref().update(updates);

          document.getElementById('userEmail').value = '';
          document.getElementById('userPassword').value = '';
          alert('Successful Sign-Up!');
          
         /* ref.child(firebase.auth().currentUser.uid).set(data).then(function(ref){
            console.log('saved data');

          })*/
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if(error){
           console.log('error message:' + errorMessage);
          }
        })     
      }
});


document.getElementById("loginBtn").addEventListener("click", function(){

  if(document.getElementById('loginEmail').value == '' || document.getElementById('loginPassword').value == ''){
    alert('Please double check the email and password fields');
  }
  else{
      firebase.auth().signInWithEmailAndPassword(document.getElementById('loginEmail').value, document.getElementById('loginPassword').value)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
          document.getElementById('loginPassword').value = '';
        } 
        else if(error) {
          alert(errorMessage);
          document.getElementById('loginEmail').value = '';
          document.getElementById('loginPassword').value = '';
        }
        else{
          document.getElementById('loginEmail').value = '';
          document.getElementById('loginPassword').value = '';
          alert('Successful Login!');
        }
      });
    }
});

document.getElementById('logoutBtn').addEventListener("click", function(){
  firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.alert('user logged out!');
      document.getElementById('userName').innerHTML = '';
      document.getElementById('loginEmail').value == '';
      document.getElementById('loginPassword').value == '';
    }).catch(function(error) {
      // An error happened.
      window.alert('Error: ' + error.message);
    });
});



firebase.auth().onAuthStateChanged(function(user){
  if(user)
  {
    window.alert('user logged in!');
    document.getElementById('userName').innerHTML = ''+ user.email;
    console.log('user id for logged in user is......' + user.uid);
    uidOfUser = user.uid;

  }
  else{
     window.alert('user NOT logged in!');

  }

});



//Sign Up Modal

     // Get the modal
    var modal = document.getElementById('signUpModal');

    // Get the button that opens the modal
    var btn = document.getElementById("signUpModalBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
        console.log('modal open...');
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    
}); //last line of file