// Welcome to p5play Version 3!

// Before using p5play take a look at the documentation:
// https://p5play.org/learn

//Setting Special input Keys

//failed attempt at checking, kept for cheap enumeration
let instructionText = 
`Welcome`

const reservedKeys = {
SPACE: 32,
BACKSPACE: 8,
ENTER: 13,
SHIFT: 16,
PERIOD: 190,
}

//Player Variables
let player;

let energy = 0;
const flingCost = 1;
const pickupE = .1; //amount of energy pickups replenish

let vel = 0;
let steps = 0;
const s2v = .1;

//Area Variables
let border;
let margin = 10;

//Pickup Variables
let pickups;
let totalPickups = 30;

//End Point
let endPoint;
const overR = 30
function setup() {
  //TO DO: normalize window sizes
  createCanvas(windowWidth, windowHeight);

  //Player Setup
  player = new Sprite();
  player.d = 100;
  player.color = 'pink';
  player.stroke = 'red';

  //Scene Setup
  border = new Sprite();
  border.w = 0;
  border.h = 0;
  border.collider = 'static';
  //Left Wall
  border.addCollider(0-((1/2)*(canvas.w)),0,margin, canvas.h);
  //Right Wall
  border.addCollider(0+((1/2)*(canvas.w)),0,margin, canvas.h);
  //Upper Wall
  border.addCollider(0,(-(1/2)*(canvas.h)-margin),canvas.w, 0);
  //Lower Wall
  border.addCollider(0,(+(1/2)*(canvas.h)+margin),canvas.w, 0);

  //Pickup Objects
  pickups = new Group();
  pickups.diameter = 10;
  pickups.x = () => random(0, canvas.w);
  pickups.y = () => random(0, canvas.h);
  pickups.amount = totalPickups; 

  player.overlaps(pickups, gain);

  //End Points
  endPoint = new Sprite(canvas.w-100,canvas.h/2, overR);

  player.overlaps(endPoint, finish)

  changeText('inst',"your mom");
}

function draw() {
  background(255); // try removing this line and see what happens!
}

//----DYNAMIC AND OVERLAPS
function gain(player, pickup){
  energy += pickupE;
  pickup.remove();
}

function finish(){
  console.log("Press Enter to Finish");
}

//----MECHANIC DEFINITIONS
function fling(){
  //player velocity = steps * velocity conversion factor (s2v)
  player.speed += steps*s2v;
  
  //steps goes to zero
  steps = 0;
  
  //fling cost gets deducted from energy
  energy -= flingCost;
  
  changeText('Energy Total', energy);
  //debug statement
  console.log('Fling, steps: ',steps,' energy: ', energy);
}

function amplify(){
  console.log('Amplify');
}

function nsk(){
  console.log('nsk, steps: ',steps);
  steps++;
}

function undo(){
  console.log('undo');
}

//adds 45 degree 'spin' allowing the player to turn
function pivot(){
  player.direction += 45;
  console.log('pivot')
}

function explode(){
  player.remove();
  console.log('kaboom')
}

//--------INPUT HANDLING------------
function keyPressed(){
  
  //Camera Controls 
  if(keyCode == reservedKeys.LEFT_ARROW){
    console.log('Pan Left');
  }

  if(keyCode == reservedKeys.RIGHT_ARROW){
    console.log('Pan Right');
  }

  if(keyCode == reservedKeys.UP_ARROW){
    console.log('Pan Right');
  }

  if(keyCode == reservedKeys.DOWN_ARROW){
    console.log('Pan Right');
  }

  //Player Controls
  if(keyCode == reservedKeys.SPACE){
    if(energy>flingCost){
      fling();
    }else{
      explode();
    }
  }

  if(keyCode == reservedKeys.BACKSPACE){
    undo();
  }

  if(keyCode == reservedKeys.SHIFT){
    amplify();
  }

  if(keyCode == reservedKeys.ENTER){
    finish();
  }

  if(keyCode == reservedKeys.PERIOD){
    pivot();
  }

  if(checkAlpha()) {
    nsk();
  }
}

function checkAlpha(kC){
  return ((keyCode > 64 && keyCode < 91));
}

//Instructions

function changeText(id, newText){
  let myDiv = document.getElementById(id);
  myDiv.innerText = newText;
}



  
