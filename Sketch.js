function setup() {
    createCanvas(700, 700);
    background("purple");
  }
  
  function draw() {
  
    fill("pink")
    
  // console.log(mouseIsPressed );
    
    if(mouseIsPressed)
       rect(mouseX,mouseY , 39, 15);
  }