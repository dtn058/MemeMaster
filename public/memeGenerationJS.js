var storage = firebase.storage();
var storageRef = storage.ref();
var testRef = storageRef.child('memeTemplates/SurprisedPikachu.jpg')

testRef.getDownloadURL().then(function(url){
  var test = url;
  document.getElementById("test").src = test;
})

/* this is for the top/bot text and applying it to the image
*/
window.onload = function(){

    // get a reference to the canvas and context
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    $('img').on('load',function(){
      console.log(this.width)
    canvas.width = this.width;
    canvas.height = this.height;
    draw();
  });
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
        ctx.drawImage($('img').get(0), 0, 0);
        ctx.textAlign="center"; 
        ctx.miterLimit=2;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.strokeText(topText,canvas.width/2, canvas.height/8);
        ctx.strokeText(botText,canvas.width/2,canvas.height-(canvas.height/8));
        ctx.fillStyle = 'white';
        ctx.fillText(topText,canvas.width/2, canvas.height/8);
        ctx.fillText(botText,canvas.width/2,canvas.height-(canvas.height/8));

    }

}; // end $(function(){});
/*
console.log(testRef);
window.onload = function(){
document.getElementById("test").innerHTML = testRef.getDownloadURL();
}
*/