status="";
object=[];
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status:detecting objects";
}
function modelloaded(){
    console.log("modelloaded");
    status=true;
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
object=results;
}
}
function preload(){
    img=loadImage("https://images-na.ssl-images-amazon.com/images/I/8155VSJIb2L._AC_SX569_.jpg");
}
function draw(){
    image(img,0,0,640,420);
    
    if(status!=""){
        document.getElementById("status").innerHTML="Status: Object detected";
        for(var i=0;i<object.length;i++){
            percent=floor(object[i].confidence*100);
            fill("blue");
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("blue");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }


}