//Import expressJS module
const express = require('express');

// Create an epxress application object
const app = express()

app.set("view engine", "ejs");

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
  //This method searches for an item in the itme list with this name
  //And adds it to this character's inventory
  pickupItem: function(searchName) {
    console.log(this);
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("Found a match!");
        this.inventory.push(item);
        break;
      }
    }
  },
  //This method searches for a given slot and overwrites
  //it with an empty object
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log("Found item slot. Removing.");
        this.equipment.slotName = {};
        break;
      }
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

// Create a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem('Sword');
  character.unequipItem('arm_p');
  res.render('profile', { sendData: character })
});

//Start an http listen server
app.listen(3000);
