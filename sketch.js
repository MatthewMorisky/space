

function setup() {

	createCanvas(500, 500); 	
	spaceship = new Spaceship();


}

function draw() {
	background(51);
	spaceship.exe();

		
}
function keyPressed() {
	if (keyCode === 32) { //Spacebar
		if (!spaceship.hasBeam) {
			spaceship.hasBeam = true;
			beam = new Beam();
			console.log('pew');

		}
	}
}

function keyReleased() {
	
}