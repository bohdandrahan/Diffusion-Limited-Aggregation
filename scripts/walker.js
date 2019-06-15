class Walker {
	constructor(x, y, r, color) {
		this.position = createVector(x, y)
		this.radius = r;
		this.color = color;
		this.isColided = false;
	}
	checkColision(group) {
		if (!this.isColided) {
			for (let i = 0; i < group.walkers.length; i++) {
				let sqDistance = sqDist(this.position, group.walkers[i].position);
				if (sqDistance < ((this.radius + group.walkers[i].radius)) ** 2 / 4) {
					this.isColided = true;
				}
			}
		}
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