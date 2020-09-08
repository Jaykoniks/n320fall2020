// JavaScript source code



class Rain {
	constructor(size,xPos,yPos){
		this.size = size;
		this.xPos = xPos;
		this.yPos = yPos;
	}
	drop = function() {
		console.log("drop");
	}
}

console.log(new Rain)

let droplets = [];

blueValue = 0;
totalHeight = 300;
totalWidth = 300;
groundHeight = 50
groundHit = 0;


function setup() {
	createCanvas(totalWidth,totalHeight);
	background(200);
}

//("rgb(0,0," + blueValue + ")")

function draw() {
	fill("rgb(0,0," + blueValue + ")");
	rect(0, totalHeight - groundHeight, totalWidth, groundHeight)
	droplets.forEach()
}



for (let i=0;i<10;i++) {
	droplets.push(new Rain())
}

//function drop() {
//console.log("Test")
//		}
//droplets.forEach(this.drop)
