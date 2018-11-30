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

});