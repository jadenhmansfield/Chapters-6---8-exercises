//in-class

//Modeling a bank account

function inclass(){
    const account = {
        owner: "Alex",
        balance: 0,

    credit(amount) {
        this.balance += amount;
    },
    
    describe() {
      return `owner: ${this.name}, balance ${this.balance}`;
    }
};
    
    console.log(account.describe());
    alert(account.describe());
    account.credit(250);
    account.credit(-80);
    console.log(account.describe());
    alert(account.describe());
}


//Chapter 6

//Adding character experience

function chapter61(){
    const aurora = {
        name: "Aurora",
        health: 150,
        strength: 25,
        xp:0,
    
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength, and ${this.xp} XP points.`;
      }
    };

      // Aurora is harmed by an arrow
      aurora.health -= 20;
      // Aurora equips a strength necklace
      aurora.strength += 10;
      // Aurora learn a new skill
      aurora.xp += 15;
    
    console.log(aurora.describe());
    alert(aurora.describe());
}

  
//Modeling a dog

function chapter62(){
    const dog = {
        name:"Fang",
        species:"boarhound",
        size:75,
    

    bark() {
        return "Grrr! Grrr!";
        }
    };

    console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
    alert(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
    console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
    alert(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
}



//Chapter 7

//Musketeers

function chapter71(){
    const musketeers = ["Athos", "Porthos", "Aramis"];

    console.log("Here are the three musketeers:");
    alert("Here are the three musketeers:");
    for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
    alert(musketeers[i]);
    }

    musketeers.push("D'Artagnan");
    console.log("another musketeer has been added")
    alert("another musketeer has been added")

    musketeers.forEach(musketeer => {
        console.log(musketeer);
        alert(musketeer);
      });

      musketeers.splice(2, 1);
    console.log("Aramis has been removed");
    alert("Aramis has been removed");

    for (const musketeer of musketeers) {
    console.log(musketeer);
    alert(musketeer);
}
}

//Sum of values

function chapter72(){
    const values = [3, 11, 7, 2, 9, 10];
    let sum = 0;

    values.forEach(value => {
        sum += value;
    });

    console.log(sum);
    alert(sum);
}

//Chapter 8

//Word Info

function chapter81(){
    let input = prompt("Enter any word:");
    console.log(input.length);
    alert(input.length);
    console.log(`Its lowercase value is ${input.toLowerCase()}`);
    alert(`Its lowercase value is ${input.toLowerCase()}`);
    console.log(`Its uppercase value is ${input.toUpperCase()}`);
    alert(`Its uppercase value is ${input.toUpperCase()}`);
}

//Vowel Count

function chapter82(){
    let input = prompt("Enter any word:");
    let vowelCount = 0;

    [...input].forEach(letter => {
        const lowerLetter = letter.toLowerCase();
            if (
                lowerLetter === "a" ||
                lowerLetter === "e" ||
                lowerLetter === "i" ||
                lowerLetter === "o" ||
                lowerLetter === "u" ||
                lowerLetter === "y"
            ) {
            vowelCount++;
            }
    }
    );
console.log(vowelCount);
alert(vowelCount);
}
