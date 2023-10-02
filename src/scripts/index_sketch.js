// Welcome to p5play Version 3!

// Before using p5play take a look at the documentation:
// https://p5play.org/learn

//Setting Special input Keys


const reservedKeys = {
SPACE: 32,
BACKSPACE: 8,
ENTER: 13,
SHIFT: 16,
PERIOD: 190
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  checkNotReserved()
  console.log("setup");
}



function draw() {
  background(255); // try removing this line and see what happens!

  fill(0);
  textSize(24);
  textAlign(CENTER);
  text('You can do this', width / 2, height / 2);
}

//Going to try to abstract this a bit
//similar to unreal's system
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
    console.log('Fling');
  }

  if(keyCode == reservedKeys.BACKSPACE){
    console.log('Undo');
  }

  if(keyCode == reservedKeys.SHIFT){
    console.log('Amplify');
  }

  if(checkNotReserved()) {
    console.log('nsk');
  }
}


function checkNotReserved(kC){
  
  //checks if in bounds of parentheses
  return ((keyCode > 64 && keyCode < 91) ||  (keyCode > 96 && keyCode < 123));

  //Runs through dict of defined keyCodes
  //returns true it no matching keycode was found
  /*for(const key in reservedKeys){

    if(reservedKeys.key == kC){
      
      return false;
    }
    console.log(kC, ' isnt ', reservedKeys.key);
  }

  return true;
  */
}


  
