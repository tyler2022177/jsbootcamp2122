// Import expressJS module
const express = require('express');

// Create an express application object
const app = express();

// Create one character object
var character = {
  name: 'Yer Boi',
  race: 'Heretic Astartes',
  profession: 'Chaos Space Marine',
  equipment: {
    head: {},
    chest: {},
    legs: {},
    arm_p: {},
    arm_s: {}
  },
  inventory: [],
  abilities: [],
  stats: {
    attack: 5,
    defense: 5,
    hp_current: 20,
    hp_max: 20
  },
  pickupItem: function(searchName) => {
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("Found a match");
        who.inventory.push(item);
        break;
      }
    }
  }
}
unequipItem: function(slot) {
  for (var slotName in this.equipment) {
    console.log(slotName);
    if (slotname == slot) {
      console.log("Found item slot. Removing");
      this.equipment.slotname = {};
    }
  }
}
// This holds all possible items
var item_list = [
  {
    name: 'Sword',
    slot: 'arm_p',
    bonuses: {
      attack: 5
    }
  },
  {
    name: 'Shield',
    slot: 'arm_s',
    bonuses: {
      defense: 5
    }
  }
];

function pickupItem



// Create a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem('Sword');
  res.send(`
    <h1>Hello</h1>
    <p>Name: ${character.name}</p>
    <p>Race: ${character.race}</p>
    <p>Profession: ${character.profession}</p>
    <p>Attack: ${character.stats.attack}</p>
    <p>Defense: ${character.stats.defense}</p>
    <p>HP: ${character.stats.hp_current} / ${character.stats.hp_max}</p>
    <p>Inventory: ${JSON.stringify(character.inventory)}</p>
    `);
    // Each of the characters stats
    // One per paragraph
});

//Start an http listen server
app.listen(3000)
