var storage = firebase.storage();
var storageRef = storage.ref();
var testRef = storageRef.child('memeTemplates/SurprisedPikachu.JPG');
var pikaRef = storageRef.child('memeTemplates/SurprisedPikachu.JPG');
var fwpRef = storageRef.child('memeTemplates/1990s-First-World-Problems.jpg');
var aliensRef = storageRef.child('memeTemplates/Ancient-Aliens.jpg');
var batmanRobinRef = storageRef.child('memeTemplates/Batman-Slapping-Robin.jpg');
var blackGirlRef = storageRef.child('memeTemplates/Black-Girl-Wat.jpg');
var blueBtnRef = storageRef.child('memeTemplates/BlueButton.JPG');
var notMyBusinessRef = storageRef.child('memeTemplates/But-Thats-None-Of-My-Business.jpg');
var bubbleGirlRef = storageRef.child('memeTemplates/Chubby-Bubbles-Girl.jpg');
var conspiracyRef = storageRef.child('memeTemplates/Conspiracy-Keanu.jpg');
var wonkaRef = storageRef.child('memeTemplates/Creepy-Condescending-Wonka.jpg');
var dogeRef = storageRef.child('memeTemplates/Doge.jpg');
var futuramaRef = storageRef.child('memeTemplates/Futurama-Fry.jpg');
var catRef = storageRef.child('memeTemplates/Grumpy-Cat.jpg');
var pillsRef = storageRef.child('memeTemplates/Hard-To-Swallow-Pills.jpg');
var johnnyRef = storageRef.child('memeTemplates/Heres-Johnny.jpg');
var haroldRef = storageRef.child('memeTemplates/Hide-the-Pain-Harold.jpg');
var asianDadRef = storageRef.child('memeTemplates/High-Expectations-Asian-Father.jpg');
var liveDangerouslyRef = storageRef.child('memeTemplates/I-Too-Like-To-Live-Dangerously.jpg');
var interestingManRef = storageRef.child('memeTemplates/InterestingMan.jpg');
var pigeonRef = storageRef.child('memeTemplates/Is-This-A-Pigeon.jpg');
var jackieChanRef = storageRef.child('memeTemplates/Jackie-Chan-WTF.jpg');
var leoRef = storageRef.child('memeTemplates/LeoDicaprioCheers.jpg');
var spongebobRef = storageRef.child('memeTemplates/Mocking Spongebob.JPG');
var offRampRef = storageRef.child('memeTemplates/OffRamp.jpg');
var simplyRef = storageRef.child('memeTemplates/One-Does-Not-Simply.jpg');
var oprahRef = storageRef.child('memeTemplates/Oprah-You-Get-A.jpg');
var philosoraptorRef = storageRef.child('memeTemplates/Philosoraptor.jpg');
var successKidRef = storageRef.child('memeTemplates/Success-Kid.jpg');
var twoBtnsRef = storageRef.child('memeTemplates/Two-Buttons.jpg');
var teacherRef = storageRef.child('memeTemplates/Unhelpful-High-School-Teacher.jpg');
var skeletonRef = storageRef.child('memeTemplates/waiting-Skeleton.jpg');
var xyRef = storageRef.child('memeTemplates/X-All-The-Y.jpg');
var safeRef = storageRef.child('memeTemplates/safe.jpg');
var distractedBoyfriendRef = storageRef.child('memeTemplates/Distracted Boyfriend.JPG');


/*var selectedFile = document.getElementById('upload').files[0];
if(selectedFile != null){
   
  var test = selectedFile.imageURL;
  document.getElementById("test").src = test;

}
*/
pikaRef.getDownloadURL().then(function(url) {
    fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
        document.getElementById("test").src = URL.createObjectURL(blob);
    })
    .catch(function(error) {
        // error handling
    });    
});

testRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

safeRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });  
})

distractedBoyfriendRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("distractedBoyMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

fwpRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("FWPMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

aliensRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("AliensMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

batmanRobinRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("BatmanRobinMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

blackGirlRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("BlackGirlWatMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

blueBtnRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("BlueButtonMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

notMyBusinessRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("NotMyBusinessMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

bubbleGirlRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("bubblesGirlMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

conspiracyRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("conspiracyKeanuMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

wonkaRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("creepyWonkaMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

dogeRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

futuramaRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

catRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

pillsRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

johnnyRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

haroldRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

asianDadRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

liveDangerouslyRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

interestingManRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

pigeonRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

jackieChanRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

leoRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

spongebobRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

offRampRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

simplyRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

oprahRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

philosoraptorRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

successKidRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

twoBtnsRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

teacherRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

skeletonRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})

xyRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

        // error, handle it however you want to
    })
    .then(function(blob) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(blob);
      });   
    })
    .catch(function(error) {
        // error handling
    });
})