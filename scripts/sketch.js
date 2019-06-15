var tree;
var randomWalkers;
let qty_walkers = 1;
var count = 0;
let w;
let h;
let a

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



function draw() {
	background(70)
	tree.display()

	while (randomWalkers.walkers.length === qty_walkers && count < 700) {
		randomWalkers.update();
		randomWalkers.checkColisions(tree)
	}
	randomWalkers.display()


	while (randomWalkers.walkers.length < qty_walkers && count < 700 - 1) {

		let newXY = getRandomWall()
		randomWalkers.addNewWalker(newXY[0], newXY[1])
	}

}