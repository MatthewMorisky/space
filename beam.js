function Beam() {
	this.trans = 255

	this.show = function() {
		//push();
		fill(0,0,255, this.trans);
		translate(spaceship.pos.x, spaceship.pos.y);
		rotate(spaceship.heading);
		rect(spaceship.pos.x, spaceship.pos.y, 200, 5);
		//pop();
	}



}