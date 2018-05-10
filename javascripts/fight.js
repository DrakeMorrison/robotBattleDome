'use strict';
const data = require('./data.js');

const fight = () => {
  const fighters = data.getContestants();
  if (fighters.length < 2 || fighters[0] === undefined) {
    alert('There are not enough contestants!');
  } else {
    let newHP1 = fighters[0].hp - fighters[1].dmg;
    let newHP2 = fighters[1].hp - fighters[0].dmg;
    newHP1 = newHP1 < 0 ? 0 : newHP1;
    newHP2 = newHP2 < 0 ? 0 : newHP2;
    if (newHP1 <= 0 && newHP2 <= 0) {
      fighters[0].tie = true;
      buildResult(fighters[0], fighters[1]);
    } else if (newHP1 <= 0) {
      buildResult(fighters[1], fighters[0]);
    } else if (newHP2 <= 0) {
      buildResult(fighters[0], fighters[1]);
    }

    const percentHealth1 = getPercentage(newHP1, fighters[0].hp);
    const percentHealth2 = getPercentage(newHP2, fighters[1].hp);
    $('#hp1').width(percentHealth1 + '%');
    $('#hp2').width(percentHealth2 + '%');
    fighters[0].hp = newHP1;
    fighters[1].hp = newHP2;
    data.setContestant1(fighters[0]);
    data.setContestant2(fighters[1]);
  }
};

const getPercentage = (newHP, oldHP) => {
  if (oldHP > 0) {
    return (newHP / oldHP) * 100;
  } else {
    return 0;
  }
};

const buildResult = (winObj, losObj) => {
  let message = '';
  if (winObj.tie) {
    message = `It was a draw! ${winObj.name} and ${losObj.name} defeated each other simultaneously!`;
    winObj.name = 'Nobody';
    winObj.hp = 0;
    winObj.dmg = 0;
    winObj.weapon = 'none';
    winObj.model = 'none';
    winObj.type = 'none';
  } else {
    message = `${winObj.name} the ${winObj.model} defeated ${losObj.name} the ${losObj.model} with its ${winObj.weapon}`;
  }
  let domString = '';
  domString += `<div id='ex-panel' class="panel panel-success">`;
  domString += `<div class="panel-heading">`;
  domString += `<h3 class="panel-title">We Have a Winner!</h3>`;
  domString += `</div>`;
  domString += `<div class="panel-body">`;
  domString += `<h1 class='text-capitalize'>The Winner is ${winObj.name}!</h1>`;
  domString += `<h1 class='text-capitalize'>${message}</h1>`;
  domString += `<h2>HP: ${winObj.hp}</h2>`;
  domString += `<h2 class='text-capitalize'>Weapon: ${winObj.weapon}</h2>`;
  domString += `<h2>Damage: ${winObj.dmg}</h2>`;
  domString += `<h2 class='text-capitalize'>Model: ${winObj.model}</h2>`;
  domString += `<h2 class='text-capitalize'>Type: ${winObj.type}</h2>`;
  domString += `</div>`;
  domString += `</div>`;

  $('#winner-stage').html(domString);
};

module.exports = fight;
