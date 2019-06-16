var tree;
var randomWalkers;
let qty_walkers = 1;
var count = 0;
let w;
let h;
let a

function setup() {
	w = windowWidth * 0.98
	h = windowHeight * 0.98
	createCanvas(w, h)
	tree = new Tree()
	tree.initWalker()
	randomWalkers = new RandomWalkers()
	for (let i = 0; i < qty_walkers; i++)
		randomWalkers.addNewWalker()
}

function mousePressed() {
	tree.addNewWalker(mouseX, mouseY)
}


function draw() {
	background(70)
	tree.display()

	while (randomWalkers.walkers.length === qty_walkers && count < 10000) {
		randomWalkers.update();
		randomWalkers.checkColisions(tree)
	}
	randomWalkers.display()


	while (randomWalkers.walkers.length < qty_walkers && count < 10000 - 1 && tree.walkers.slice(-1)[0].position.y > 10) {

		let newXY = getRandomWall()
		randomWalkers.addNewWalker(newXY[0], newXY[1])
	}

}