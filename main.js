difference=0;
rightWristX=0;
leftWristX=0;
function preload(){

}




    function setup()
    {
    canvas=createCanvas(550,550);
    canvas.position(560,150)
    video=createCapture(VIDEO);
    video.position(35,50)
    video.size(550,600);
    posenet=ml5.poseNet(video, modelLoded);
    posenet.on('pose',gotPoses);
    }


    function modelLoded()
    {
        console.log('Posenet is initialized!');
    }
    function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("Left Wrist X: "+leftWristX+" Right Wrist X: "+rightWristX+" Difference:"+difference);
    }
    }
    function draw(){
        background("#6C91C2");
        document.getElementById("text_size").innerHTML=difference;
        //text-size(difference);
        fill('#FFB787');
        text('Joseph T.',50,400);

    }
