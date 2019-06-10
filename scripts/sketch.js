var tree
var randomWalkers;

function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95)
	tree = new Tree()
	tree.initWalker()
	randomWalkers = new RandomWalkers()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()
	randomWalkers.addWalker()

	randomWalkers.addWalker()

}

function draw() {
	background(90)
	tree.display()
	randomWalkers.update()
	randomWalkers.display()

}