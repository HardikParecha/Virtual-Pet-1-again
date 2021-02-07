
var dog,happyDog,database,Food,foodStock,readStock;
var Dog;
var bg;

function preload()
{
dog = loadImage("dogImg.png")
happyDog = loadImage("dogImg1.png")
bg = loadImage("bg.jpg")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  Dog=createSprite(350,350,30,30)
  Dog.addImage(dog);
  Dog.scale=0.3;

   foodStock=database.ref('Food');
   foodStock.on("value",readStock);

  
}


function draw() {  
  background(bg)

if(keyWentDown(UP_ARROW)){
  writeStock('Food');
    Dog.addImage(happyDog)
    Food=Food-1;

}

  drawSprites();
  textSize(20)
  fill("black")
  text("Food Remaining: "+Food,50,350)

  textSize(22);
  fill("Black")
  text("Press UP_ARROW Key to Feed Drago Milk",50,60)


 
}

function readStock(data){
  Food=data.val();
}
function writeStock(x){
database.ref('/').update({
  Food:20
})
}
