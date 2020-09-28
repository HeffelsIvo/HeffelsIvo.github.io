function setup() {
    createCanvas(800,800);
    background(255, 245, 230);
    
    noStroke();
    fill(255,50,0);
    rect(200,0,600,520);
    
    fill(0,100,200);
    rect(0,520,200,280);
    
    fill(255,200,0);
    rect(700,660,100,140);
    
    strokeCap(SQUARE);
    stroke(0);
    strokeWeight(25);
    line(0,260,200,260);
    strokeWeight(12);
    line(200,0,200,800);
    line(0,260,200,260);
    line(0,520,800,520);
    line(700,520,700,800);
    line(700,660,800,660);
}

function draw() {
    
}