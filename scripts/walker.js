class Walker {
	constructor(x, y, r, color) {
		this.position = createVector(x, y)
		this.radius = r;
		this.color = color;
	}
	update() {
		let newx = -1
		while (newx > width || newx < 0) {
			newx = this.position.x + random(-this.radius, this.radius)
		}
		this.position.x = newx

		let newy = -1;
		while (newy > height || newy < 0) {
			newy = this.position.y + random(-this.radius, this.radius)
		}
		this.position.y = newy
	}

	display() {
		push();
		translate(this.position.x, this.position.y);
		colorMode(HSB);
		fill(this.color, 95, 95);
		noStroke();
		ellipse(0, 0, this.radius);
		pop();
		colorMode(RGB)
	}
}