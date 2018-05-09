'use strict';
const data = require('./data.js');

const robot = {
  name: '',
  hp: 0,
  dmg: 0,
  type: undefined,
  weapon: undefined,
};

const drone = Object.create(robot);
drone.type = 'drone';
drone.moveType = 'flying';
const snake = Object.create(robot);
snake.type = 'snake';
snake.moveType = 'slithering';
const atv = Object.create(robot);
atv.type = 'atv';
atv.moveType = 'rolling';

const buildRobot1 = (e) => {
  const battleBot = checkType(e.target.id);
  battleBot.name = $('#name1').val();
  battleBot.cornerNum = 1;
  const domString = buildBotDomString(battleBot);
  $('#corner-1').html(domString);
};

const buildRobot2 = (e) => {
  const battleBot = checkType(e.target.id);
  battleBot.name = $('#name2').val();
  battleBot.cornerNum = 2;
  const domString = buildBotDomString(battleBot);
  $('#corner-2').html(domString);
};

const checkType = (typeId) => {
  switch (typeId) {
    case 'asmodeus':
      return buildBattleBot({model: 'asmodeus', weapon: 'acid venom', type: 'snake',});
    case 'simon':
      return buildBattleBot({model: 'simon', weapon: 'squeeze attack', type: 'snake',});
    case 'blue-boy':
      return buildBattleBot({model: 'blue boy', weapon: 'Tazer', type: 'drone',});
    case 'vox-amon':
      return buildBattleBot({model: 'vox amon', weapon: 'glue', type: 'drone',});
    case 'the-flamespeaker':
      return buildBattleBot({model: 'the flamespeaker', weapon: 'flame-thrower', type: 'atv',});
    case 'the-grinder':
      return buildBattleBot({model: 'the grinder', weapon: 'chainsaw and compactor', type: 'atv',});
  }
};

const buildBattleBot = (specObj) => {
  let battleBot = {};
  if (specObj.type === 'snake') {
    battleBot = Object.create(snake);
    battleBot.dmg = randomNumber(50, 75);
    battleBot.hp = randomNumber(75, 100);
  } else if (specObj.type === 'drone') {
    battleBot = Object.create(drone);
    battleBot.dmg = randomNumber(75, 100);
    battleBot.hp = randomNumber(75, 100);
  } else if (specObj.type === 'atv') {
    battleBot = Object.create(atv);
    battleBot.dmg = randomNumber(25, 75);
    battleBot.hp = randomNumber(75, 100);
  } else {
    battleBot = Object.create(robot);
    battleBot.dmg = randomNumber(0, 100);
    battleBot.hp = randomNumber(75, 100);
  }

  battleBot.model = specObj.model;
  battleBot.weapon = specObj.weapon;
  data.setContestants(battleBot);
  return battleBot;
};

const buildBotDomString = (botObj) => {
  console.error(botObj);
  let domString = '';
  domString += `<div id='ex-panel' class="panel panel-danger">`;
  domString += `<div class="panel-heading">`;
  domString += `<h3 class="panel-title text-capitalize">${botObj.name}</h3>`;
  domString += `</div>`;
  domString += `<div class="panel-body">`;
  domString += `<h2 class='text-capitalize'>Model: ${botObj.model}</h2>`;
  domString += `<h2>HP: ${botObj.hp}`;
  domString += `<div class="progress">`;
  domString += `<div id='hp${botObj.cornerNum}' class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">`;
  domString += `<span class="sr-only">60% Complete</span>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</h2>`;
  domString += `<h2>Weapon: ${botObj.weapon}</h2>`;
  domString += `<h2>Damage: ${botObj.dmg}</h2>`;
  domString += `</div>`;
  domString += `</div>`;

  return domString;
};

const randomNumber = (lowNum, highNum) => {
  return Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
};

module.exports = {
  buildRobot1,
  buildRobot2,
};
