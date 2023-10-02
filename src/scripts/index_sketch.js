// Welcome to p5play Version 3!

// Before using p5play take a look at the documentation:
// https://p5play.org/learn

//Setting Special input Keys

//failed attempt at checking, kept for cheap enumeration
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

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Sprite();
  player.d = 100;
  player.color = 'pink';
  player.stroke = 'red';
}

function draw() {
  background(255); // try removing this line and see what happens!

  fill(0);
  textSize(24);
  textAlign(CENTER);
  text('You can do this', width / 2, height / 2);
}

//----ACTION DEFINITIONS
function fling(){
  //player velocity = steps * velocity conversion factor (s2v)
  player.speed += steps*s2v;
  
  //steps goes to zero
  steps = 0;
  
  //fling cost gets deducted from energy
  energy -= flingCost;
  
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
    fling();
  }

  if(keyCode == reservedKeys.BACKSPACE){
    undo();
  }

  if(keyCode == reservedKeys.SHIFT){
    amplify();
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


  
