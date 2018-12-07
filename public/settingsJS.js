var storage = firebase.storage();
var storageRef = storage.ref();
var pikaRef = storageRef.child('memeTemplates/SurprisedPikachu.JPG');
pikaRef.getDownloadURL().then(function(url) {
    fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(memeImage) {
        document.getElementById("avatarpic").src = URL.createObjectURL(memeImage);
    })
    .catch(function(error) {
        // error handling
    });    
});

window.onload = function(){
const modal = document.getElementById('pass-modal');
const open = document.getElementById('open-modal');
const close = document.getElementById('close');
const cancelledIt = document.getElementById('cancelled-it');
const confirmedIt = document.getElementById('confirmed-it');
const returnSpan = document.getElementById('return-value');

open.addEventListener('click', () => {
    modal.showModal();
});

cancelledIt.addEventListener('click', () => {
    modal.close('cancelled');
});

// returns the user's new pass when click "confirm"
confirmedIt.addEventListener('click', () => {
    modal.close(document.getElementById('newPass').value);
});

close.addEventListener('click', () => {
    modal.close('cancelled');
})

modal.addEventListener('cancel', () => {
    modal.close('cancelled');
});

// close when clicking on backdrop
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close('cancelled');
    }
});

// display returnValue
modal.addEventListener('close', () => {
    returnSpan.innerHTML = modal.returnValue;
});


//sign out user
document.getElementById('logoutBtn').addEventListener("click", function() {
    console.log('inside logout function....');
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.alert('user logged out!');
        /* document.getElementById('userName').innerHTML = '';
         document.getElementById('loginEmail').value == '';
         document.getElementById('loginPassword').value == '';*/
        window.location.href = 'https://cse134bprojmememaster.firebaseapp.com/index.html';

    }).catch(function(error) {
        // An error happened.
        window.alert('Error: ' + error.message);
    });

});


//change password
document.getElementById('confirmed-it').addEventListener('click', function() {
    var user = firebase.auth().currentUser;
    var newPassword = document.getElementById('newPass').value;

    user.updatePassword(newPassword).then(function() {
        // Update successful.
        alert('successfully updated password!')
    }).catch(function(error) {
        // An error happened.
        alert('Error: ' + error.message);
    });

})

}


