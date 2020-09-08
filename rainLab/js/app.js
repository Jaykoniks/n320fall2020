// Jacob Shirley
// 9.8.2020

let totalHeight = 300;
let totalWidth = 500;
let rainAmount = 25;
let rainSize = 3;
let rainMaxHeight = 100;
let rainSpeed = 5;
let globalSpeed = 2;

class Rain {
	constructor(size,xPos,yPos, speed){
		this.size = size;
		this.xPos = xPos;
		this.yPos = yPos;
		this.speed = speed;
	}
}

let ground = {
	blueValue: .05,
	hit: 0,
	height: 50,
}

let droplets = [];

for(i=0;i<rainAmount;i++) {
	droplets.push(new Rain(rainSize * Math.random(),totalWidth * Math.random(),rainMaxHeight * Math.random(), rainSize * Math.random()));
}

function setup() {
	createCanvas(totalWidth,totalHeight);
	background(210);
}

function draw() {
	background(210);
	fill("rgb(0,0," + Math.floor(ground.blueValue * 255) + ")");
	rect(0, totalHeight - ground.height, totalWidth, ground.height)
	fill("#0000FF");
	droplets.forEach(makeRain);
}

function makeRain(item, index) {
	circle(item.xPos,item.yPos,item.size);
	item.yPos = item.yPos + globalSpeed + item.speed;
	if(item.yPos >= totalHeight - ground.height) {
		item.yPos = 0;
		item.xPos = totalWidth * Math.random();
		ground.hit++;
		// console.log(ground.hit);
		if(ground.hit >= 10)
		{
			ground.hit = 0;
			if(ground.blueValue < 1) {
				ground.blueValue = ground.blueValue + .05;
			}
			
		}
		// console.log(ground.blueValue * 255);
	}
}