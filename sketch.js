function setup() {
    createCanvas(900, 900);
    background("pink")
  }
  
  function draw() {
    stroke("green");
    fill("white");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }