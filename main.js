function setup() {
    canvas = createCanvas(64;)
    canvas.center();
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}    
img = "";
status = "";
object = [];

function preload() {
    img = loadImage('dog_cat.jpg');

}

function draw() {
    image(video,0,0,380,380);
    if(status != "")
        {
            r = random(255);
            g= random(255);
            b = random(255);
         objectDetector.detectv(video,gotresult);
        for (i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "status : object Detected";
            document.getElementById("number_of_objects")innerHTML = "number of objects detected are :"+ objects.length;
            fill(r,g,b);
         
             fill("#FF0000");
             percent = floor(objects[i].confidence * 100);
             text(objects[i].label + "" + percent + "%", objects[i].x, objects[i.y]);
             noFill();
             stroke(r,g,b)
             stroke("#FF0000");
             rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
             text(objects[i].label + "" + percent + "%", objects[i].x +15, objects[i].y +150;)

        }
    }
    fill('#FF0000');
     text("Dog", 45,75)
     noFill();
     stroke("#FF0000");
     rect(30,60,450,350);

     fill("#FF0000")
     text("cat",320, 120);
     noFill();
     stroke("#FF0000");
     rect(300, 90, 270, 320 )

}
   
function modelLoaded() {
    console.log("modelLoaded!")
    status = true;
    objectDetector.detect(video,gotResult);
}

function gotResult(error, results)  {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
