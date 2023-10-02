// Welcome to p5play Version 3!

// Before using p5play take a look at the documentation:
// https://p5play.org/learn

function setup() {
  createCanvas(800, 400);
  
  console.log("setup");
  
}

function draw() {
  background(255); // try removing this line and see what happens!

  fill(0);
  textSize(24);
  textAlign(CENTER);
  text('Click to create a new sprite', width / 2, height / 2);
}

function mouseClicked(){
    
    console.log("pressed");
    // creates a new sprite at the mouse's position
    let sprite = new Sprite(mouse.x, mouse.y, 30, 30);
    // try editing the sprite's size!

    // by default sprites are displayed as simple shapes
    // that have a random fill color

    // sprites have many properties you can edit
    // here the x and y velocities of the sprite are edited
    
    // try editing the sprite's speed!

    // Sprites collide by default in p5play v3.
    // Try playing this example and see if you
    // can keep one of the squares from leaving
    // the p5.js canvas!
}
  
