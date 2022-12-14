let posX;
let posY;

let velX;
let velY;

let gravity = 0.1

let hue;

let w;
let h;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);

    posX = random (0, width);
    posY = random (0, height);

    velX= 2.4;
    velY= 1.3;

    colorMode (HSB, 255);


    hue = random (0, 255); 

    w = random (100,300);
    h = random (100,300);
}
function draw() {
	velY= velY+ gravity;
	
    posX= posX + velX;
    posY= posY + velY;
		
		if (posY > height) {
				velY = velY * -1;
		}
    if (posX > width || posX < 0) {
			velX = velX *-1; 
			
		}
	hue = hue +1; 
    if (hue > 255) {
        hue= 0;
    }

    fill (hue, 160, 185)
    ellipse (posX, posY, w, h);

}