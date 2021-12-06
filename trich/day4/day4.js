//Import expressJS module
const express = require('express');

//Create an express aplication object
const app = express()

app.set("view engine", "ejs")

class Character {
  constructor(name, race, profession) {
    this.id = characterList.length + 1000;
    this.name = name
    this.race = race
    this.profession = profession
    this.equipment = {
        head: {},
        chest: {},
        legs: {},
        arm_p: {},
        arm_s: {}
      },
      this.inventory = []
    this.abilities = []
    this.stats = {
        attack: 10,
        defense: 5,
        hp_current: 15,
        hp_max: 15
      },
      //This method searches for an item in the item list
      // with this name and adds it to this character's inventory
      this.pickupItem = function(searchName) {
        for (var item of item_list) {
          console.log(item.name);
          if (item.name == searchName) {
            console.log("Found a match");
            this.inventory.push(item)
            break;
          }
        }
      },
      //This method searches for a given slot and
      //overwrites is with an empty object
      this.unequipItem = function(slot) {
        for (var slotName in this.equipment) {
          console.log(slotName);
          if (this.equipment.hasOwnProperty(slotName)) {
            if (slotName == slot) {
              console.log("Found item slot. Removing.");
              this.equipment.slotName = {};
              break;
            }
          }
        }
      }
  }
};

var characterList = []
characterList.push(new Character('Pagrik', 'Starfish', 'Dummy'))

//This holds all possible items
var item_list = [{
    name: 'Spitfire',
    slot: 'arm_p',
    bonuses: {
      attack: 10
    }
  },
  {
    name: 'Particle Shield',
    slot: 'arm_s',
    bonuses: {
      defense: 10
    }
  }
];

characterList[0].pickupItem('sword')
characterList[0].unequipItem('arm_p');

//Create a GET endpoint
app.get('/profile/:characterid', (req, res) => {
  console.log(req.params.characterid);
  //Render a template called 'profile' from the views folder
  //and send it a variable called sendData
  res.render('profile', {
    sendData: characterList[0]
  })
});

//Start an http listen server
app.listen(3000);
