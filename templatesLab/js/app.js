// Jacob Shirley
// 9.22.20

let restockAmount = 10;
let outOfStockMessage = 0;

class vendingMachine {
    constructor(firstCandy, secondCandy, firstChips) {
        this.firstCandy = firstCandy;
        this.secondCandy = secondCandy;
        this.firstChips = firstChips;
        this.ca1 = restockAmount;
        this.ca2 = restockAmount;
        this.ch1 = restockAmount;
    }
    
    render() {
        return`
            <div>${this.firstCandy}: ${this.ca1}</div>
            <div>${this.secondCandy}: ${this.ca2}</div>
            <div>${this.firstChips}: ${this.ch1}</div>
            `;
        }
        
    buyCa1() {
        if (this.ca1 > 1) {
            this.ca1--;
       } else {
           this.ca1 = outOfStockMessage;
       }
    }

    buyCa2() {
        if (this.ca2 > 1) {
            this.ca2--;
       } else {
           this.ca2 = outOfStockMessage;
       }
    }
    
    buyCh1() {
        if (this.ch1 > 1) {
            this.ch1--;
       } else {
           this.ch1 = outOfStockMessage;
       }
    }

    restock() {
        this.ca1 = restockAmount;
        this.ca2 = restockAmount;
        this.ch1 = restockAmount;
    }
}





let vend1 = new vendingMachine("Meese's", "Twisters", "Cheesos");
let vendDiv = document.getElementById("vendDiv");
vendDiv.innerHTML = vend1.render();

let but1 = document.getElementById("button1");
button1.innerHTML = "Purchase " + vend1.firstCandy;

let but2 = document.getElementById("button2");
button2.innerHTML = "Purchase " + vend1.secondCandy;

let but3 = document.getElementById("button3");
button3.innerHTML = "Purchase " + vend1.firstChips;

function purchaseCa1() {
    vend1.buyCa1();
    vendDiv.innerHTML = vend1.render();
}

function purchaseCa2() {
    vend1.buyCa2();
    vendDiv.innerHTML = vend1.render();
}

function purchaseCh1() {
    vend1.buyCh1();
    vendDiv.innerHTML = vend1.render();
}

function restockVend(){
    vend1.restock();
    vendDiv.innerHTML = vend1.render();
}