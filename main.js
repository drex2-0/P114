nose_x=0;
nose_y=0;
function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("Model is Loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x= "+ results[0].pose.nose.x);
        console.log("nose y= "+ results[0].pose.nose.y);
        nose_x= results[0].pose.nose.x -40 ;
        nose_y= results[0].pose.nose.y +5 ;
    }
}
function draw(){
    image(video,0,0,400,400);
    image(mustache,nose_x,nose_y,80,31);
}
function snap(){
    save("myItalianImage.jpeg");
}

