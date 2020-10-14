//Create variables here
var dog, happydog,  foods, foodStock;
var database;
var dogImg,happydogImg;


function preload()
{
  //load images here
  this.image=loadImage('dogImg.png');
  this.image=loadImage('happydog.png');
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 15, 5);
  dog.addImage(dogImg);
  dog.scale=0.2
  foodStock=database.ref('food').on("value",readStock);
}


function draw() {  
background(46, 139, 87);


if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(happydogImg)
}
else{
  dog.addImage(dogImg)
}

  drawSprites();
  //add styles here
  textSize(11)
  stroke(10);
  fill("red")
  text("Press Up arrow to feed the dog!",10,10);
}
function readStock(data){
  foods=data.val();

}

function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
    food:x
  })
}