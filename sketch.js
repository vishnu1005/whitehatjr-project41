const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thunder, thunderimg1, thunderimg2, thunderimg3, thunderimg4;
var maxdrops = 50;
var dropsArray = [];
var rand;
var thunderZero = 0;
var engine, world;

function preload(){
    thunderimg1 = loadImage("images/1.png");
    thunderimg2 = loadImage("images/2.png");
    thunderimg3 = loadImage("images/3.png");
    thunderimg4 = loadImage("images/4.png");
}

function setup(){
   var canvas = createCanvas(400,700);
   engine = Engine.create();
   world = engine.world;
   umbrella = new Umbrella(200,300);

   if(frameCount % 125 === 0) {
        for(var i=0; i < maxdrops; i++) {
            dropsArray.push(new Drop(random(0,400), random(0,400)));
        }
   }

}

function draw(){
    background("black");
    Engine.update(engine);

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderZero=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunderimg1);
            break;
            case 2: thunder.addImage(thunderimg2);
            break; 
            case 3: thunder.addImage(thunderimg3);
            break;
            case 4: thunder.addImage(thunderimg4);
            break;
            default: break;
        }
    }

    
    umbrella.display();
    for(var i = 0; i<maxdrops; i++){
        dropsArray[i].display();
        dropsArray[i].repositionDrop()
    }

}   

