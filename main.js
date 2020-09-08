song1="taki_taki.mp3";
song2="harry Poter theam Songmp3";

function preload(){


}

function setup(){
canvas=createCanvas(600,350);
canvas.position(350,300);

video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,600,350);
}
