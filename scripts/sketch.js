var tree;
var randomWalkers;
let qty_walkers = 0;
var count = 0;
let w;
let h;

function setup() {
	w = 500
	h = 500
	createCanvas(w, h)
	tree = new Tree()
	tree.initWalker()
	randomWalkers = new RandomWalkers()
	for (let i = 0; i < qty_walkers; i++)
		randomWalkers.addNewWalker()
}

function getRandomWall() {
	let x, y;
	let a = random([0, 1, 2, 3])
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

function mousePressed() {
	let newXY = getRandomWall()

	randomWalkers.addNewWalker(newXY[0], newXY[1])
}


function draw() {
	background(90)
	tree.display()
	console.log(frameRate(), tree.walkers.length)

	colision = false
	while (!colision) {
		randomWalkers.update();
		randomWalkers.checkColisions(tree)
	}
	while (randomWalkers.walkers.length < qty_walkers) {
		let newXY = getRandomWall()
		randomWalkers.addNewWalker(newXY[0], newXY[1])
	}
	// randomWalkers.display()

}