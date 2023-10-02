// Welcome to p5play Version 3!

// Before using p5play take a look at the documentation:
// https://p5play.org/learn

//Setting Special input Keys

//failed attempt at checking, kept for cheap enumeration
let instructionText = 
`
Welcome to Limited Spaces:

The goal is to reach The Octogon

Move by 'jumping', by pressing [SPACE]. Note: This consumes Energy.
Attempting a jump at less than 1 energy will make your ship explode.

Energy can be collected by touching pickups, which will give a fraction of the energy of one jump.

Pressing [any alphabetical key] will increase the force of your jumps.

Pressing [.] will cause you to 'Pivot' shifting 45 deg clockwise. It will also stop player character motion.

Jumping will reset all alphabetical keys, as will pivoting.

`

const reservedKeys = {
SPACE: 32,
BACKSPACE: 8,
ENTER: 13,
SHIFT: 16,
PERIOD: 190,
}

//Player Variables
let player;

let energy = 3;
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
  createCanvas(windowWidth, 300);

  changeText('Energy Total', energy);

  //Player Setup
  player =	new Sprite(50, canvas.h/2, 60, 'triangle');
  player.rotation = 90;
  player.direction = 0;

  //Scene Setup
  border = new Sprite();
  border.w = 30;
  border.h = canvas.h - (player.d + 100);
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
  endPoint = new Sprite(canvas.w-100,canvas.h/2, overR, 'octagon');

  player.overlaps(endPoint, finish)

  //initialize instructions
  changeText('inst',instructionText);
}

function draw() {
  background(255); // try removing this line and see what happens!
}


//Instructions

function changeText(id, newText){
  let myDiv = document.getElementById(id);
  myDiv.innerText = newText;
}

//----DYNAMIC AND OVERLAPS
function gain(player, pickup){
  energy += pickupE;
  changeText('Energy Total', energy);
  pickup.remove();
}

function finish(){
  changeText(inst, 'Complete! Thank you so much for playing. Press F5 to restart');
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
  changeText('Step Counter', steps);
  //debug statement
  console.log('Fling, steps: ',steps,' energy: ', energy);
}

function nsk(){
  steps++;
  changeText('Step Counter', steps)
}

//adds 45 degree 'spin' allowing the player to turn
function pivot(){
  player.speed = 0;
  
  steps = 0;
  
  //TO DO: Post mortem on potential 'change steps'
  changeText('Step Counter', steps);
  player.direction += 45;
  player.rotation = player.direction + 90;
}

function explode(){
  changeText(inst, 'In an explosion to quick for the naked eye, you have exploded from insufficient energy. F5 to restart');
  player.remove();
}

//--------INPUT HANDLING------------
function keyPressed(){
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
    clearJump();
    pivot();
  }

  if(checkAlpha()) {
    nsk();
  }
}

function checkAlpha(kC){
  return ((keyCode > 64 && keyCode < 91));
}

function clearJump(){
  steps = 0;
}



  
