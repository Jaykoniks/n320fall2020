// Jacob Shirley
// 10.30.20

// Variables used in rest of code
let boardHeight = 6;
let boardWidth = 7;
let player1 = "Blue";
let player2 = "Red";
let currentTurn = player1;
let winStatus = false; 
let drawCounter = 0;

// Used to create tokens in dom
let tokens = `<circle cx="25" cy="-25" r="20" fill="Red" class="redMark"/>
                <circle cx="25" cy="-25" r="20" fill="Blue" class="blueMark"/>
            `;

// Grabs svg box and display text from dom
let boxy = document.getElementById("box");
let disp = document.getElementById("display");

// Object for individual spaces on grid
class Space {
    constructor(status) {
        this.status = status;
    }
}

// Object for individual columns
class Column {
    constructor(height) {
        this.height = height;
        this.spaces = [];
    }

    // Sets up spaces and tokens
    setupC() {
        for(let i = 0; i < this.height; i++) {
            this.spaces.push(new Space("empty"));
            if(i%2 == 0) {
                boxy.innerHTML += tokens;
            }
        }
    }
}

// Entire board
class Board {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.columns =[];
    }

    // Sets up columns and starts setupC for each of them
    setupB() {
        for(let i = 0; i < this.width; i++) {
            this.columns.push(new Column(this.height));
        }
        for(let i = 0; i < this.columns.length; i++) {
            this.columns[i].setupC()
        }
    }
}

// Creates board and sets it up
let gameBoard = new Board(boardHeight,boardWidth);
gameBoard.setupB();

// Displays winner and removes remaining buttons
function declareWinner() {
    disp.innerHTML = currentTurn + " wins!";
    c0.remove();
    c1.remove();
    c2.remove();
    c3.remove();
    c4.remove();
    c5.remove();
    c6.remove();
}

// Displays draw
function declareDraw() {
    disp.innerHTML = "Draw"
}

// Switches turn between players and changes the color of the buttons
function switchTurn() {
    if (currentTurn == player1) {
        currentTurn = player2;
        disp.innerHTML = player2 + "'s turn"
        c0.setAttribute("style", "fill:red")
        c1.setAttribute("style", "fill:red")
        c2.setAttribute("style", "fill:red")
        c3.setAttribute("style", "fill:red")
        c4.setAttribute("style", "fill:red")
        c5.setAttribute("style", "fill:red")
        c6.setAttribute("style", "fill:red")
    } else if (currentTurn == player2) {
        currentTurn = player1;
        disp.innerHTML = player1 + "'s turn"
        c0.setAttribute("style", "fill:blue")
        c1.setAttribute("style", "fill:blue")
        c2.setAttribute("style", "fill:blue")
        c3.setAttribute("style", "fill:blue")
        c4.setAttribute("style", "fill:blue")
        c5.setAttribute("style", "fill:blue")
        c6.setAttribute("style", "fill:blue")
    }
}

// Checks for a win and then either switches turns or declares the winner
function endTurn() {
    checkWin(currentTurn);
    if(winStatus == false && drawCounter < boardWidth) {
        switchTurn()
    } else if(winStatus == true){declareWinner()
    }
}

// Checks for win
function checkWin(color) {
    let winCheck = 0;

    // Checks for vertical win
    for(let i=0; i<gameBoard.width; i++) {
        winCheck = 0;
        if(winStatus == true) {break;}
        for(let x=0; x<gameBoard.height; x++) {
            if(gameBoard.columns[i].spaces[x].status == color){
                if(winStatus == true) {break;}
                winCheck++
                if(winCheck == 4) {
                    winStatus=true;
                }
            } else {
                winCheck = 0;
            }
        }
    }

    // Checks for horizontal win
    for(let i=0; i<gameBoard.height; i++) {
        if(winStatus == true) {break;}
        for(let x=0; x<gameBoard.width; x++) {
            if(gameBoard.columns[x].spaces[i].status == color){
                if(winStatus == true) {break;}
                winCheck++
                if(winCheck == 4) {
                    winStatus=true;
                }
                } else {
                    winCheck = 0;
            }
        }
    }

    // Checks for draw and automatically declares it if applicable
    if(winStatus == false && drawCounter >= boardWidth) {
        declareDraw();
    }
}

// Retrieves tokens and puts them into arrays 
let rm = document.getElementsByClassName("redMark");
let bm = document.getElementsByClassName("blueMark");
let redMarks = Array.prototype.slice.call(rm);
let blueMarks = Array.prototype.slice.call(bm);

// Grabs buttons from dom
let c0 = document.getElementById("column0");
let c1 = document.getElementById("column1");
let c2 = document.getElementById("column2");
let c3 = document.getElementById("column3");
let c4 = document.getElementById("column4");
let c5 = document.getElementById("column5");
let c6 = document.getElementById("column6");

// Makes buttons work as buttons
c0.addEventListener("click", button0);
c1.addEventListener("click", button1);
c2.addEventListener("click", button2);
c3.addEventListener("click", button3);
c4.addEventListener("click", button4);
c5.addEventListener("click", button5);
c6.addEventListener("click", button6);

// Sends button clicks to button function with column data
function button0() {buttonAll(0, c0);}
function button1() {buttonAll(1, c1);}
function button2() {buttonAll(2, c2);}
function button3() {buttonAll(3, c3);}
function button4() {buttonAll(4, c4);}
function button5() {buttonAll(5, c5);}
function button6() {buttonAll(6, c6);}

// Actual button function
function buttonAll(key, pressed) {

    // Animation of token falling to lowest available box in column
    let fillAmount = 0;
    for(i=0;i<gameBoard.columns[key].spaces.length;i++) {
        if(gameBoard.columns[key].spaces[i].status != "empty") {
            fillAmount++;
        }
    }
    let pieceDest = 300 - (fillAmount * 50);
    if(currentTurn == player2) {
        TweenMax.to(redMarks[redMarks.length - 1],
            {duration: .001, x: key * 50}
            )
        TweenMax.to(redMarks[redMarks.length - 1],
            {duration: .1 + .05*(6-fillAmount), y: pieceDest}
            )
        redMarks.pop(0);
    } else if(currentTurn == player1) {
        TweenMax.to(blueMarks[blueMarks.length - 1],
            {duration: .001, x: key * 50}
            )
        TweenMax.to(blueMarks[blueMarks.length - 1],
            {duration: .1 + .05*(6-fillAmount), y: pieceDest}
            )
        blueMarks.pop(0);
    } else {console.log("Something went wrong!")}

    // Puts a piece on the lowest available box in the column (code not visuals)
    for(let i = 0; i < gameBoard.columns[key].spaces.length; i++) {
        if(gameBoard.columns[key].spaces[i].status == "empty") {
            gameBoard.columns[key].spaces[i].status = currentTurn;
            break;
        }
    }

    // Removes button if column is full to avoid errors
    if(gameBoard.columns[key].spaces[5].status != "empty") {
        pressed.remove();
        drawCounter++;
    }
    endTurn();
}