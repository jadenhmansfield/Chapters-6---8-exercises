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

  
//Modeling a bank account


//A name property set to "Alex".
//A balance property set to 0.
//A credit method adding the (positive or negative) value passed as an argument to the account balance.
//A describe method returning the account description.
//Use this object to show its description, crediting 250, debiting 80, then show its description again.