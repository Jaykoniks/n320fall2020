// Jacob Shirley
// 9.15.20

class Instrument {
    constructor(volume, family, verb){
        this.volume = volume;
        this.family = family;
        this.verb = verb;
	}
    play() {
        console.log("A " + this.family + " instrument " + this.verb + " at a volume of " + this.volume);
    }
}

class Woodwind extends Instrument {
    constructor(volume, family, verb){
        super(volume, "Woodwind", "tooted");
    }
}

class Percussion extends Instrument {
    constructor(volume, family, verb){
        super(volume, "Percussion", "banged");
    }
}

class Stringed extends Instrument {
    constructor(volume, family, verb){
        super(volume, "Stringed", "strummed");
    }
}

let band = [new Woodwind(7), new Percussion(10), new Stringed(5)];

band.forEach(
    
    function playNoise(item) {
        item.play();
    }

);
