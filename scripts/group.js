class Group {

	constructor() {
		this.walkers = []
	}
	add(walker) {
		this.walkers.push(walker)

	}
	addNewWalker(x = random(0, width), y = random(0, height)) {
		this.walkers.push(new Walker(x, y, 10, count % 360))
		count++
	}
	display() {
		for (let i = 0; i < this.walkers.length; i++) {
			this.walkers[i].display();
		}
	}
	update() {
		for (let i = 0; i < this.walkers.length; i++) {
			this.walkers[i].update();
		}
	}
}
class Tree extends Group {

	initWalker() {
		this.walkers[0] = new Walker(width / 2, height, 3, 0)
	}
	update() {}
}

class RandomWalkers extends Group {
	checkColisions(group) {
		for (let i = 0; i < this.walkers.length; i++) {
			this.walkers[i].checkColision(group)
		}
		let colidedWalkers = this.walkers.filter(item => item.isColided === true)
		for (let i = 0; i < colidedWalkers.length; i++) {
			tree.add(colidedWalkers[i])
		}
		this.walkers = this.walkers.filter(item => item.isColided === false)
	}
}

function getRandomWall() {
	let x, y;
	let a = random([0]) //, 1, 2, 3])
	if (a === 0) {
		x = random(0, w)
		y = 0
	}
	if (a === 1) {
		x = w;
		y = random(0, h)
	}
	if (a === 2) {
		x = random(0, w)
		y = h
	}
	if (a === 3) {
		x = 0;
		y = random(0, h)
	}
	return [x, y];
}

function sqDist(a, b) {
	return (a.x - b.x) ** 2 + (a.y - b.y) ** 2
}