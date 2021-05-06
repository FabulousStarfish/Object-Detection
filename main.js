img="";
status="";
objects=[];
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(600,425);
    canvas.position(475, 150);

    cocossd=ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
}
function modalLoaded(){
    console.log("MODAL LOADED!");
    status=true;
    cocossd.detect(img,gotResult);    
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    console.log(result);
    objects=result;
}
function draw(){
    image(img,0,0,600,425);
    // //DOG
    // fill('#b78d01');
    // stroke('#b78d01');
    // strokeWeight(5);
    // rect(60,30,60,30,0,10,0,0);
    // noFill();
    // rect(60,60,450,300);
    // fill("#ffffff");
    // textSize(20);
    // text("DOG",67.5,52.5)
    // //CAT
    // fill('#3e7770');
    // stroke('#3e7770');
    // rect(250,40,60,30,0,10,0,0);
    // noFill();
    // rect(250,70,300,300);
    // textSize(20);
    // fill('#ffffff');
    // text("CAT",257.5,62.5)
    // document.getElementById("status").innerHTML="Objects Detected";
    if(status!=""){
        for(l=0;l<objects.length;l++){
            fill('#3e7770');
            rect(objects[l].x,objects[l].y-30,60,30,0,10,0,0);
            fill('#ffffff');
            confidence=floor(objects[l].confidence*100);
            text(objects[l].label+"  "+confidence+"%",objects[l].x+5,objects[l].y-10);
            noFill();
            stroke('#3e7770');
            strokeWeight(5);
            rect(objects[l].x,objects[l].y,objects[l].width,objects[l].height);            
            document.getElementById("status").innerHTML="Objects Detected";
        }
    }
}