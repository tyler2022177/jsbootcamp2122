//Import expressJS module
const express = require('express');

//Create an express aplication object
const app = express()

app.set("view engine", "ejs");


class GameMatch {
  constructor() {
    this.id = gameList.length + 1000;
    this.turn = 0; //This is the index of this.players whose turn it is
    this.players = [];
    this.round = 0;
  }
}


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
    speed: 10,
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







//This holds all possible items
var item_list = [{
    name: 'spatula',
    slot: 'arm_p',
    bonuses: {
      attack: 5
    }
  },
  {
    name: 'barnacle shield',
    slot: 'arm_s',
    bonuses: {
      defense: 10
    }
  }
];

//
//Create character list with 2 default characters
//

var gameList = [];
var characterList = []
characterList.push(new Character('pagrik', 'star', 'dummy'))
characterList.push(new Character('sponchbop', 'sponge', 'fry cook'))

for (var character of characterList) {
  character.pickupItem('spatula');
}

//Create a GET endpoint
app.get('/game', (req, res) => {
  var foundGame = gameList.find(game => game.id == req.query.gameid);
  //If a game was found, we can manipulate it
  if (foundGame) {
    //Check to see if the user sent the addcharacter query param (&addcharacter=xxxx)
    if (req.query.addcharacter) {
      //check to see if there is room in this game's player list to add a charcater
      if (foundGame.players.length < 2) {
          var foundProfile = characterList.find(character => character.id == req.query.addcharacter);
          if (foundProfile) {
            foundGame.players.push(foundProfile.id)
          }
      }
    }
  //Render a template called 'game' from the 'views' folder
  //and send it a variable called sendData
  res.render('game', {
    sendData: foundGame
    })
  } else {
    res.redirect('/newgame');
  }

});

//This endpoint creates a new character
app.get('/newgame', (req, res) => {
  gameList.push(new GameMatch());
  res.redirect('/game/?gameid=' + characterList[characterList.length - 1].id)
});

//Create a GET endpoint
app.get('/profile', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.query.characterid);
  if (foundProfile) {
  //Render a template called 'profile' from the views folder
  //and send it a variable called sendData
  res.render('profile', {
    sendData: foundProfile
    })
  } else {
    res.redirect('/newprofile');
  }

});

//This endpoint creates a new character
app.get('/newprofile', (req, res) => {
  characterList.push(new Character('sponchbop', 'sponge', 'fry cook'))
  res.redirect('/profile/?characterid=' + characterList[characterList.length - 1].id)
});

//Start an http listen server
app.listen(3000);
