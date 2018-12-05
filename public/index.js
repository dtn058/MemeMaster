document.addEventListener('DOMContentLoaded', function() {


document.getElementById("signUpBtn").addEventListener("click", function(){

  if(document.getElementById('userEmail').value == '' || document.getElementById('userPassword').value == ''){
    alert('Please double check the email and password fields');
  }

  else{
        firebase.auth().createUserWithEmailAndPassword(document.getElementById('userEmail').value, document.getElementById('userPassword').value).catch(function(error) {
        // Handle Errors here.

        var errorCode = error.code;
        var errorMessage = error.message;

        if(error){
           console.log('error message:' + errorMessage);
        }
        
          document.getElementById('userEmail').value = '';
          document.getElementById('userPassword').value = '';
          alert('Successful Sign-Up!');
        
       
      });

      }

      });


document.getElementById("loginBtn").addEventListener("click", function(){

  if(document.getElementById('loginEmail').value == '' || document.getElementById('loginPassword').value == ''){
    alert('Please double check the email and password fields');
  }

  else{


      firebase.auth().signInWithEmailAndPassword(document.getElementById('loginEmail').value, document.getElementById('loginPassword').value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if(error){
          console.log('error message:' + errorMessage);
        }

        

          document.getElementById('loginEmail').value = '';
          document.getElementById('loginPassword').value = '';
          alert('Successful Login!');
    
        
      });
       console.log(firebase.auth().currentUser);

      }

});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById('userName').text = 'Hi User!';
  } else {
    // No user is signed in.
    document.getElementById('userName').text = 'no user logged in';
  }
});




 document.getElementById('viewbtn').addEventListener("click", function showImage(){
 var storage = firebase.storage();
 var storageRef = storage.ref();
  storageRef.child('Distracted Boyfriend.JPG').getDownloadURL().then(function(url) {
            console.log(url);

             var test = url;
             alert(url);
             document.querySelector('img').src = test;

         }).catch(function(error) {

         });
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