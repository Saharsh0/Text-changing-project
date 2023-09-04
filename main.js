noseX = 0;
noseY = 0;
wristL = 0;
wristR = 0;
side = 0;
function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,500);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw()
{
    background('grey');
    fill("black");
    textSize(side - 75);
    text("Saharsh", noseX, noseY);
    //document.getElementById("pixel").innerHTML = "The side of the square measures"+side+"px"
}

function modelLoaded()
{
    console.log("model loaded");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        wristL = results[0].pose.leftWrist.x;
        wristR = results[0].pose.rightWrist.x;
        side = floor(wristL - wristR);
    }
}