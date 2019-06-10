class Group {
	constructor() {
		this.walkers = []
	}
	addWalker(x = random(0, width), y = random(0, height)) {
		this.walkers.push(new Walker(x, y, 15, 0))
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
		this.walkers[0] = new Walker(width / 2, height / 2, 15, 0)
	}
	update() {}
}

class RandomWalkers extends Group {

}