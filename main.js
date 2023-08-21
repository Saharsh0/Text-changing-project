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
    background('white');

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
    }
}