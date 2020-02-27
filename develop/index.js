function Character(name, age, profession, strength, hp) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.strength = strength;
    this.hp = hp;
}

Character.prototype.printStats = function () {
    console.log(`Name: ${this.name} 
Age: ${this.age} 
Profession: ${this.profession} 
Strength: ${this.strength} 
hp: ${this.hp}
------------------------------`);
}

Character.prototype.isAlive = function () {
    if (this.hitpoints > 0) {
        console.log(`${this.name} is still alive!
------------------------------`);
        return true;
    } else {
        console.log(`${this.name} has died!
------------------------------`);
        return false;
    }
}


const jonezBonez = new Character("Jonez Bonez", 900, "Bad Lands Broth Smuggler", 70, 2000);
jonezBonez.printStats();

const neilChambers = new Character("Neil Chambers", 54, "Town Sherif", 60, 1400);
neilChambers.printStats();

const SharpChambers = new Character("Sharp Chambers", 6, "Neil Chambers Dog", 26, 400);
SharpChambers.printStats();

const nathanParce = new Character("Nathan Parce", 28, "Town Writer", 40, 1600);
nathanParce.printStats();

const mrKramer = new Character("Mr. Kramer", 71, "The Towns Corrupt Banker", 30, 700);
mrKramer.printStats();








// CODE TO USE LATER IS DOWN HERE!!!!!!!!!!!!!!

// Character.prototype.attack = function (victim) {
//     victim.hp -= this.strength;
// }

// Character.prototype.levelUp = function () {
//     this.age += 1;
//     this.strength += 5;
//     this.hp += 25;
// }

// nathanRaz.printStats();
// jonezBonez.printStats();
// jonezBonez.attack(nathanRaz);
// nathanRaz.printStats();
// nathanRaz.isAlive();
// jonezBonez.levelUp();
// jonezBonez.printStats();