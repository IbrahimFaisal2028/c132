status = "";
img = "";
objects = [];
function preload()
{
img = loadImage("ocean.jpeg");
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd", modelLoaded());
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, result)
{
if(error) {
    console.log(error);
}
console.log(results)
objects = results;
}
function draw()
{
    if(status != "")
    {
       for (i = 0; i < objects.length; i++)
       {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#FF0000")
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
    }
}