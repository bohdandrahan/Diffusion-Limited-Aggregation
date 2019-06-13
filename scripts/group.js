class Group {
	constructor() {
		this.walkers = []
	}
	add(walker) {
		this.walkers.push(walker)

	}
	addNewWalker(x = random(0, width), y = random(0, height)) {
		this.walkers.push(new Walker(x, y, 20 - 0.05 * count, count % 360))
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
		this.walkers[0] = new Walker(width / 2, height / 2, 15, 0)
	}
	update() {}
}

class RandomWalkers extends Group {
	checkColisions(group) {
		let colided = []
		for (let i = 0; i < this.walkers.length; i++) {
			for (let j = 0; j < group.walkers.length; j++) {
				let sqDistance = sqDist(this.walkers[i], group.walkers[j]);
				if (sqDistance < ((this.walkers[i].radius + group.walkers[j].radius)) ** 2 / 4) {
					colided.push(this.walkers[i])
				}
			}
		}
		for (let i = 0; i < colided.length; i++) {
			this.colide(colided[i], group)
			colision = true
		}
	}
	colide(walker, group) {
		group.add(walker)
		this.walkers = this.walkers.filter(item => item !== walker)
	}
}

function sqDist(a, b) {
	return (a.position.x - b.position.x) ** 2 + (a.position.y - b.position.y) ** 2
}