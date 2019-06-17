var tree;
var randomWalkers;
let qty_walkers = 1;
var count = 0;
let w;
let h;
let a;
let click = true;

function setup() {


	w = windowWidth * 0.95
	h = windowHeight * 0.95

	createCanvas(w, h)
	button = createButton('RESET');
	button.position(15, 15);
	button.mousePressed(reset);
	button.mouseOut(setClick)
	button.mouseOver(unsetClick)


	tree = new Tree()
	tree.initWalker()
	randomWalkers = new RandomWalkers()
	for (let i = 0; i < qty_walkers; i++)
		randomWalkers.addNewWalker()
}

function setClick() {
	click = true
}

function unsetClick() {
	click = false
}

function mousePressed() {
	if (click) {
		tree.addNewWalker(mouseX, mouseY)
	}
}


function reset() {
	tree.walkers = [tree.walkers[0]]

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