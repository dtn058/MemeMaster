

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

    // function that allows us to only change font size of the top
    function changeTopSize(canvas){
        // clear the rectangle and draw again
        ctx.clearRect(0,0,canvas.width,canvas.height/2);
        ctx.drawImage(document.getElementById('test'), 0, 0);
        changeBotSize(canvas); // call to make sure bot text stays there
        fontSize = canvas.width * topTextSizeInput.value;
        ctx.font = '' + fontSize + "px Impact";
        ctx.lineWidth = fontSize/15;
        // allows us to use multi-line text for meme
        topText.split('\n').forEach(function (t,i){
            topcounter = i;
            topcounter = topcounter+1;
            ctx.fillText(t,canvas.width/2, topcounter*fontSize, canvas.width);
            ctx.strokeText(t,canvas.width/2, topcounter*fontSize, canvas.width);
        })

    }
    // similar to changeTopSize, but we needed it for call to changebot bc recursion
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

    // change font size of bottom text
    function changeBotSize(canvas){
        ctx.clearRect(0,0,canvas.width,canvas.height/2);
        ctx.drawImage(document.getElementById('test'), 0, 0);
        changeTopSize2(canvas);
        botfontSize = canvas.width * botTextSizeInput.value;
        ctx.font = '' + botfontSize + "px Impact";
        ctx.lineWidth = botfontSize/15;
        // multi-line support
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

        // initial draw of the canvas
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(document.getElementById('test'), 0, 0);
        ctx.textAlign="center"; 
        ctx.miterLimit=2;
        let topcounter = 1;
        let botcounter = 1;

        // multi-line support
        topText.split('\n').forEach(function (t,i){
            topcounter = i;
            topcounter = topcounter+1;
            ctx.fillText(t,canvas.width/2, topcounter*fontSize, canvas.width);
            ctx.strokeText(t,canvas.width/2, topcounter*fontSize, canvas.width);
        })
        // multi-line support
        botText.split('\n').reverse().forEach(function (t,i){
            botcounter = i;
            botcounter = botcounter+1;
            ctx.fillText(t,canvas.width/2, canvas.height-botcounter*botfontSize+botfontSize/2, canvas.width);
            ctx.strokeText(t,canvas.width/2, canvas.height-botcounter*botfontSize+botfontSize/2, canvas.width);
        })

        
    }

   


    


    // functionality to allow user to save a meme
    document.getElementById('saveMeme').addEventListener('click', function(){
        var user = firebase.auth().currentUser;
        var imgSrc = canvas.toDataURL('image/png');
        var imgTemplate = document.getElementById('test').getAttribute('base64data');

        var topTextData = document.getElementById('topText').value;
        var botTextData = document.getElementById('botText').value;

        // meta data for the image, esp important because of the base64 data
        console.log('imgTemplate src is... ' + imgTemplate);
        var newPostKey = firebase.database().ref().child('users').push().key;
        var postData = {
            author: user.email,
            uid: user.uid,
            meme: imgSrc,
            memeTemplate: imgTemplate,
            memeID: newPostKey,
            topTextDataVal: topTextData,
            botTestDataVal: botTextData,
            title: document.getElementById('titleText').value
        };

        console.log(newPostKey);
        var updates = {};
        updates['users/' + user.uid + '/' + newPostKey] = postData;

        return firebase.database().ref().update(updates);


    })

}; 