//Isaac Hoffman

//Character object
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} xp points`;
    }
}
// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp += 15;
console.log(aurora.describe());

//Dog obfect
const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark(){
        return "Grrr! Grrr!"
    }
}
//Print object info
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Bank account object
const account = {
    name: "Alex",
    balance: 0,
    credit(amount){
        return this.balance = this.balance + amount;
    },
    describe(){}
}
//Print default account
console.log(`Owner: ${account.name}, balance ${account.balance}`)
//Add 250 credit then take 80
account.credit(250)
account.credit(-80)
//Print updated account
console.log(`Owner: ${account.name}, balance ${account.balance}`)