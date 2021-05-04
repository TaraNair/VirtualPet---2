const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Create variables here
var dog, happyDog, database, foodS, foodStock,
dogImg, happyDogImg, feed;

var feedDogButton, addFoodButton;
var fedtime, lastFed, foodObj;

 function preload()
 {
  //load images here
  happyDogImg = loadImage("images/happydog.png")
  dogImg = loadImage("images/Dog.png");

    
  }

function setup() {
  createCanvas(1000, 400);

  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);


  foodObj = new Food();
  database.ref("Food").on("value", readStock)
  dog = createSprite(800, 200, 150, 150)
  dog.addImage(dogImg)
  dog.scale(0.15)
  feedDogButton = createButton("feed the dog")
  feedDogButton.position(700, 95);
  feed.mousePressed(function feedDog(){
    function feedDog(){
      dog.addImage(happyDogImg)
      foodObj.updateFoodStock(foodObj.getFoodStock(-1))
      database.ref("/").update({
        Food:foodObj.getFoodStock,
        addFoodButton = createButton("Add Food")
        addFoodButton.position(800,95)
        addFoodButton.mousePressed(addFood)     
      })
    }
  })
 }


function draw() { 
  background(46, 139, 87);
  foodObj.display();
  feedTime = database.ref("FeedTime")
  feedTime.on("value", function(data){
    lastFed = data.val() 
    if(lastFed >= 12){
        text("lastFed" + lastFed % 12 + "pm", 350, 30)
    }else if(lastFed == 0){
              text("lastFed:12am", 350, 30)
        }else{
          text("lastFed:" + lastFed + "am", 350, 30)
        }
        drawSprites();
    })
  dog = createSprite(800, 200, 150, 150);
  

   if(keyDown(UP_ARROW)){
     writeStock(foodS);
     image(happyDogImg, 800, 100, 200, 200)
     happyDogImg.resize(200, 200);
   }
   else{
    image(dogImg, 800, 100, 200, 200)
    dogImg.resize(200, 200);
   }
   
  drawSprites();
  textSize(20);
  fill("white");
  text("Press the up arrow key to feed Cooper milk!🐶🥛", 35, 20);
  textSize(15)
  fill("white")
  text("food remaining: " + foodS, 50, 40);

  foodObj.display();

  //add styles here

  }

  function readStock(data){
    foodS = data.val();
    console.log(foodS);
  }

  function writeStock(x){

    if(x <= 0){
      x = 0
    }
    else{
      x = x - 1;
    }
   function addFoodS(){
     foodS++;
     database.ref("/").update({
        Food:foodS
     })
   }
  }