// Jacob Shirley
// 10.2.20


let circles = document.getElementsByClassName("oPiece");
// let divy = document.getElementById("divy");

console.log(circles);
// for(i=0;i<3;i++) {

// }


circles[0].onclick = showSymbol;
circles[1].onclick = showSymbol1;
circles[2].onclick = showSymbol2;
circles[3].onclick = showSymbol3;
circles[4].onclick = showSymbol4;
circles[5].onclick = showSymbol5;
circles[6].onclick = showSymbol6;
circles[7].onclick = showSymbol7;
circles[8].onclick = showSymbol8;

// circles[8].onclick = circles[8].setAttribute("stroke", "#00B");

// divy.onclick = circles[0].setAttribute("stroke", "#00B");


// divy.addEventListener("click", showSymbol())

function showSymbol() {circles[0].setAttribute("stroke", "#00B");}
function showSymbol1() {circles[1].setAttribute("stroke", "#00B");}
function showSymbol2() {circles[2].setAttribute("stroke", "#00B");}
function showSymbol3() {circles[3].setAttribute("stroke", "#00B");}
function showSymbol4() {circles[4].setAttribute("stroke", "#00B");}
function showSymbol5() {circles[5].setAttribute("stroke", "#00B");}
function showSymbol6() {circles[6].setAttribute("stroke", "#00B");}
function showSymbol7() {circles[7].setAttribute("stroke", "#00B");}
function showSymbol8() {circles[8].setAttribute("stroke", "#00B");}