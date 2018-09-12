//Working with objects
const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
}
console.log(pen.type, pen.color, pen.brand);
pen.color = "red"; //Modify pen color property
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

//dynamically add new properties to an object
pen.price = "2.5";
console.log(`My pen costs $${pen.price}`);

//example of an object: RPG Game Character Aurora
// Have class creat the aurora object with a anem, health and strangth

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};
console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);
//lose 20 hp
aurora.health -= 20
//gain 10 strength
aurora.strength += 10
console.log(`${aurora.name} now has ${aurora.health} health points and ${aurora.strength} as strength`);