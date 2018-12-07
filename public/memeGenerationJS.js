

/* this is for the top/bot text and applying it to the image
*/
window.onload = function(){
    let topTextSizeInput = document.getElementById('topTextSizeInput');
    let botTextSizeInput = document.getElementById('botTextSizeInput');
    let fontSize;
    let botfontSize;
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
    var initTop=document.getElementById('topText');
    var initBot=document.getElementById('botText');

    // set the initial input-text values to the width/height vars
    initTop.value=topText;
    initBot.value=botText;
    // call the draw command
    //drawPic();
    draw();

    // listen for keyup events on width & height input-text elements
    // Get the current values from input-text & set the width/height vars
    // call draw to redraw the rect with the current width/height values
    document.getElementById('topText').addEventListener("keyup", function(){
        topText=this.value;
        changeTopSize(canvas);
    }, false);

    document.getElementById('botText').addEventListener("keyup", function(){
        botText=this.value;
        changeBotSize(canvas);
    }, false);

    document.getElementById('topTextSizeInput').addEventListener('change', function(){
        //draw();
        changeTopSize(canvas);
    },false);
    document.getElementById('botTextSizeInput').addEventListener('change', function(){
        //draw();
        changeBotSize(canvas);
    }, false);

    function changeTopSize(canvas){
        ctx.clearRect(0,0,canvas.width,canvas.height/2);
        ctx.drawImage(document.getElementById('test'), 0, 0);
        changeBotSize(canvas);
        fontSize = canvas.width * topTextSizeInput.value;
        ctx.font = '' + fontSize + "px Impact";
        ctx.lineWidth = fontSize/15;
        topText.split('\n').forEach(function (t,i){
            topcounter = i;
            topcounter = topcounter+1;
            ctx.fillText(t,canvas.width/2, topcounter*fontSize, canvas.width);
            ctx.strokeText(t,canvas.width/2, topcounter*fontSize, canvas.width);
        })

    }

    function changeTopSize2(canvas){
        ctx.clearRect(0,0,canvas.width,canvas.height/2);
        ctx.drawImage(document.getElementById('test'), 0, 0);
        
        fontSize = canvas.width * topTextSizeInput.value;
        ctx.font = '' + fontSize + "px Impact";
        ctx.lineWidth = fontSize/15;
        topText.split('\n').forEach(function (t,i){
            topcounter = i;
            topcounter = topcounter+1;
            ctx.fillText(t,canvas.width/2, topcounter*fontSize, canvas.width);
            ctx.strokeText(t,canvas.width/2, topcounter*fontSize, canvas.width);
        })

    }

    function changeBotSize(canvas){
        ctx.clearRect(0,0,canvas.width,canvas.height/2);
        ctx.drawImage(document.getElementById('test'), 0, 0);
        changeTopSize2(canvas);
        botfontSize = canvas.width * botTextSizeInput.value;
        ctx.font = '' + botfontSize + "px Impact";
        ctx.lineWidth = botfontSize/15;
        botText.split('\n').reverse().forEach(function (t,i){
            botcounter = i;
            botcounter = botcounter+1;
            ctx.fillText(t,canvas.width/2, canvas.height-botcounter*botfontSize+botfontSize/2, canvas.width);
            ctx.strokeText(t,canvas.width/2, canvas.height-botcounter*botfontSize+botfontSize/2, canvas.width);
        })

    }
    // draw() clears the canvas and redraws the rect
    // based on user input
    
    function draw(){
        let topTextSize,botTextSize;
        //changeTopSize(canvas);
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';

        /* top font size */
        fontSize = canvas.width * topTextSizeInput.value;
        ctx.font = '' + fontSize + "px Impact";
        ctx.lineWidth = fontSize/15;

        /* bot text font size */
        botfontSize = canvas.width * botTextSizeInput.value;
        ctx.font = '' + botfontSize + "px Impact"
        ctx.lineWidth = botfontSize/15;


        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(document.getElementById('test'), 0, 0);
        ctx.textAlign="center"; 
        ctx.miterLimit=2;
        let topcounter = 1;
        let botcounter = 1;

        topText.split('\n').forEach(function (t,i){
            topcounter = i;
            topcounter = topcounter+1;
            ctx.fillText(t,canvas.width/2, topcounter*fontSize, canvas.width);
            ctx.strokeText(t,canvas.width/2, topcounter*fontSize, canvas.width);
        })
        botText.split('\n').reverse().forEach(function (t,i){
            botcounter = i;
            botcounter = botcounter+1;
            ctx.fillText(t,canvas.width/2, canvas.height-botcounter*botfontSize+botfontSize/2, canvas.width);
            ctx.strokeText(t,canvas.width/2, canvas.height-botcounter*botfontSize+botfontSize/2, canvas.width);
        })

        
    }


    //Share Modal

     // Get the modal
    var shareModal = document.getElementById('shareModal');

    // Get the button that opens the modal
    var shareBtn = document.getElementById("shareBtnModal");

    // Get the <span> element that closes the modal
    var shareSpan = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    shareBtn.onclick = function() {
        shareModal.style.display = "block";
        console.log('modal open...');
    }

    // When the user clicks on <span> (x), close the modal
    shareSpan.onclick = function() {
        shareModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == shareModal) {
            shareModal.style.display = "none";
        }
    }

}; // end $(function(){});
/*
console.log(testRef);
window.onload = function(){
document.getElementById("test").innerHTML = testRef.getDownloadURL();
}
*/