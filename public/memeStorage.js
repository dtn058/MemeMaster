/* this is just a HUGE storage for all of our memes. */

/* storage references for our templates */
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
//var spongebobRef = storageRef.child('memeTemplates/Mocking Spongebob.JPG');
var offRampRef = storageRef.child('memeTemplates/OffRamp.jpg');
var simplyRef = storageRef.child('memeTemplates/One-Does-Not-Simply.jpg');
var oprahRef = storageRef.child('memeTemplates/Oprah-You-Get-A.jpg');
var philosoraptorRef = storageRef.child('memeTemplates/Philosoraptor.jpg');
var successKidRef = storageRef.child('memeTemplates/Success-Kid.jpg');
var twoBtnsRef = storageRef.child('memeTemplates/Two-Buttons.jpg');
var teacherRef = storageRef.child('memeTemplates/Unhelpful-High-School-Teacher.jpg');
//var skeletonRef = storageRef.child('memeTemplates/waiting-Skeleton.jpg');
var xyRef = storageRef.child('memeTemplates/X-All-The-Y.jpg');
var safeRef = storageRef.child('memeTemplates/safe.jpg');
var distractedBoyfriendRef = storageRef.child('memeTemplates/Distracted Boyfriend.JPG');


// each reference points to its respective meme in our firebase cloud storage
pikaRef.getDownloadURL().then(function(url) {
    fetch(url) // gets url, returns response and blob
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) { // with the blob, we can convert it to base 64 and display img for preview
            document.getElementById("test").src = URL.createObjectURL(memeImage);
            var reader = new FileReader();
            reader.readAsDataURL(memeImage);
            reader.onloadend = function() {
                base64data = reader.result;
                //console.log(base64data);
                document.getElementById('test').setAttribute('base64data', base64data);
            }


        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
});

testRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('pikaMeme').src = URL.createObjectURL(memeImage);

            document.getElementById("pikaMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

safeRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('safeMeme').src = URL.createObjectURL(memeImage);

            document.getElementById("safeMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

distractedBoyfriendRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('distractedBoyMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("distractedBoyMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

fwpRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('FWPMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("FWPMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

aliensRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('AliensMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("AliensMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

batmanRobinRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('BatmanRobinMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("BatmanRobinMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

blackGirlRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('BlackGirlWatMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("BlackGirlWatMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

blueBtnRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('BlueButtonMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("BlueButtonMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

notMyBusinessRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('NotMyBusinessMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("NotMyBusinessMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

bubbleGirlRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('bubblesGirlMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("bubblesGirlMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

conspiracyRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('conspiracyKeanuMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("conspiracyKeanuMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

wonkaRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('creepyWonkaMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("creepyWonkaMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

dogeRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('dogeMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("dogeMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

futuramaRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('futuramaMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("futuramaMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

catRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('grumpyCatMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("grumpyCatMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

pillsRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('pillsMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("pillsMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

johnnyRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('johnnyMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("johnnyMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

haroldRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('haroldMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("haroldMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

asianDadRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('asianDadMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("asianDadMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

liveDangerouslyRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('liveDangerouslyMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("liveDangerouslyMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

interestingManRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('interestingManMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("interestingManMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

pigeonRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('pigeonMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("pigeonMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

jackieChanRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('jackieChanMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("jackieChanMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

leoRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('leoDicaprioMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("leoDicaprioMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

/*spongebobRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

         
    })
    .then(function(memeImage) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(memeImage);
      });   
    })
    .catch(function(error) {
         console.log('Error has occured in memeStorage.js');
    });
})*/

offRampRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('offRampMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("offRampMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

simplyRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('notSimplyMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("notSimplyMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

oprahRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('oprahMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("oprahMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

philosoraptorRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('philosoraptorMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("philosoraptorMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

successKidRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('successKidMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("successKidMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

twoBtnsRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('twoButtonsMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("twoButtonsMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

teacherRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('teacherMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("teacherMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})

/*skeletonRef.getDownloadURL().then(function(url){
  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.blob();
        }

         
    })
    .then(function(memeImage) {
      document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById("test").src = URL.createObjectURL(memeImage);
      });   
    })
    .catch(function(error) {
         console.log('Error has occured in memeStorage.js');
    });
})*/

xyRef.getDownloadURL().then(function(url) {
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.blob();
            }

             
        })
        .then(function(memeImage) {
            document.getElementById('xAllYMeme').src = URL.createObjectURL(memeImage);
            document.getElementById("xAllYMeme").addEventListener('click', () => {
                var reader = new FileReader();
                reader.readAsDataURL(memeImage);
                reader.onloadend = function() {
                    base64data = reader.result;
                    //console.log(base64data);
                    document.getElementById('test').setAttribute('base64data', base64data);
                }
                document.getElementById("test").src = URL.createObjectURL(memeImage);
            });
        })
        .catch(function(error) {
             console.log('Error has occured in memeStorage.js');
        });
})