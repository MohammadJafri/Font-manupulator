
difference=0;
leftWristX=0;
rightWristX=0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

     canvas = createCanvas(500, 500);
     canvas.position(560, 100);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);

}
function draw()
{
    background('#0000FF');

    document.getElementById("font_size").innerHTML = "Width And Height of the Text will be = " + difference + "px";
    fill('#F90093');
    textSize(difference);
    text('Jafri', 100, 400 );

}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);

        console.log(" leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

