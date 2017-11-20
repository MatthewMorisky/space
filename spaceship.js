function Spaceship() {
	this.pos = createVector(width/2,height/2);
	this.radius = 20;
	this.heading = 0;
	this.velocity = createVector(0,0);
	this.red = floor(random(0, 255));
	this.green = floor(random(0, 255));
	this.blue = floor(random(0,255));
	this.hasBeam = false;
	console.log( this.red + ' ' + this.blue + ' ' + this.green);



	this.exe = function() {
		this.update();
		this.show();
		
		if (keyIsDown(UP_ARROW)) {
			this.thrust();
		}
		if ( (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) ) && !( (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW) ) ) ) {
			if (keyIsDown(LEFT_ARROW)) {
				this.turn(-.1);
			}
			else if (keyIsDown(RIGHT_ARROW)) {
				this.turn(.1);
			}
		}
		else {
			this.turn(0);
		}

		if (this.hasBeam) {
			beam.show();
		}
		
	}


	this.update = function() {
		

		this.pos.add(this.velocity);
		this.velocity.mult(.99);
	}

	this.turn = function(rotation) {
		this.heading += rotation;
	}

	this.thrust = function() {

		var force = p5.Vector.fromAngle(this.heading);
		force.mult(0.2);
		this.velocity.add(force);
		
	}
	this.show = function() {
		//push();
		fill(this.red, this.green, this.blue);
		translate(this.pos.x, this.pos.y);
		rotate(this.heading + PI/2);
		triangle(-this.radius, this.radius, this.radius, this.radius, 0, -this.radius);
		//pop();


	}
}