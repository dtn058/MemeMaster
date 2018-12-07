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
pikaRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("test").src = test;
})

testRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("pikaMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

safeRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("safeMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

distractedBoyfriendRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("distractedBoyMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

fwpRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("FWPMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

aliensRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("AliensMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

batmanRobinRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("BatmanRobinMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

blackGirlRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("BlackGirlWatMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

blueBtnRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("BlueButtonMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

notMyBusinessRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("NotMyBusinessMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

bubbleGirlRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("bubblesGirlMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

conspiracyRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("conspiracyKeanuMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

wonkaRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("creepyWonkaMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

dogeRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("dogeMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

futuramaRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("futuramaMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

catRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("grumpyCatMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

pillsRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("pillsMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

johnnyRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("johnnyMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

haroldRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("haroldMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

asianDadRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("asianDadMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

liveDangerouslyRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("liveDangerouslyMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

interestingManRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("interestingManMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

pigeonRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("pigeonMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

jackieChanRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("jackieChanMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

leoRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("leoDicaprioMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

spongebobRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("mockingSpongebobMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

offRampRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("offRampMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

simplyRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("notSimplyMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

oprahRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("oprahMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

philosoraptorRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("philosoraptorMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

successKidRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("successKidMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

twoBtnsRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("twoButtonsMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

teacherRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("teacherMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

skeletonRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("skeletonMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

xyRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("xAllYMeme").addEventListener('click', () => {
        document.getElementById('test').src = test
    });
})

document.getElementById('generateBtn').addEventListener('click', function(){
    
})


/* this is for the top/bot text and applying it to the image
*/
window.onload = function(){

    // get a reference to the canvas and context
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    document.getElementById('test').onload = function(){
    canvas.width = this.width;
    canvas.height = this.height;
    draw();
  };
    // vars for current width and height of a canvas rectangle
    var topText="Enter top text here!";
    var botText="Enter bottom text here!";

    // references to the input-text elements 
    // used to let user change the rect width & height
    var $topText=document.getElementById('topText');
    var $botText=document.getElementById('botText')

    // set the initial input-text values to the width/height vars
    $topText.value=topText;
    $botText.value=botText;
    // call the draw command
    //drawPic();
    draw();

    // listen for keyup events on width & height input-text elements
    // Get the current values from input-text & set the width/height vars
    // call draw to redraw the rect with the current width/height values
    $topText.addEventListener("keyup", function(){
        topText=this.value;
        //drawPic();
        draw();
    }, false);

    $botText.addEventListener("keyup", function(){
        botText=this.value;
        //drawPic();
        draw();
    }, false);


    // draw() clears the canvas and redraws the rect
    // based on user input
    
    function draw(){
      ctx.font = "32pt Impact"
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage($('#test').get(0), 0, 0);
        ctx.textAlign="center"; 
        ctx.miterLimit=2;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.strokeText(topText,canvas.width/2, canvas.height/8);
        ctx.strokeText(botText,canvas.width/2,canvas.height-(canvas.height/12));
        ctx.fillStyle = 'white';
        ctx.fillText(topText,canvas.width/2, canvas.height/8);
        ctx.fillText(botText,canvas.width/2,canvas.height-(canvas.height/12));

    }

}; // end $(function(){});
/*
console.log(testRef);
window.onload = function(){
document.getElementById("test").innerHTML = testRef.getDownloadURL();
}
*/