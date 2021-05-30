var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "bird.png";
bg.src = "bg.png";
fg.src = "fg.png";
pipeNorth.src = "pipeNorth.png";
pipeSouth.src = "pipeSouth.png";


// some variables
var gap = 85;
var constant;
var bX = 10;
var bY = 150;
var gravity = 1.5;
var score = 0;

// on key down
document.addEventListener("keydown",moveUp);
function moveUp(){
    bY -= 25;
}

// pipe coordinates
var pipe = [];
pipe[0] = {
    x : cvs.width,
    y : 0
};

// draw images
function draw(){
    ctx.drawImage(bg,0,0);
	
    for(var i = 0; i < pipe.length; i++){
        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
        pipe[i].x--;
      
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            });
        }

        // detect collision
        if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >=  cvs.height - fg.height){
            location.reload(); // reload the page
        }
     

        if(pipe[i].x == 5){
            score++;
        }
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    ctx.drawImage(bird,bX,bY);
    bY += gravity;
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);
    requestAnimationFrame(draw);
}

draw();




function setPlayPause()
{
    // Here we toggle playpause from true to false and vice versa
    playpause = !playpause;
    if(playpause)
    {
        document.getElementById("playpause").value = "Play";
        alert("Gallery has been paused!");
        // Instead of the alert statement you would actually do the pausing of the gallery here
    }
    else
    {
        document.getElementById("playpause").value = "Pause";
        alert("Gallery is now playing!");
        // Instead of the alert statement you would place the code here that would start the gallery playing
    }
}

setPlayPause();