'use strict';
const data = require('./data.js');
const tieObj = {};

const fight = () => {
  const fighters = data.getContestants();
  if (fighters.length < 2) {
    alert('There are not enough contestants!');
  } else {
    console.error(fighters);
    const newHP1 = fighters[0].hp - fighters[1].dmg;
    const newHP2 = fighters[1].hp - fighters[0].dmg;
    console.error(newHP1, newHP2);
    if (newHP1 < 0 && newHP2 < 0) {
      buildResult(tieObj);
    } else if (newHP1 < 0) {
      buildResult(fighters[1]);
    } else if (newHP2 < 0) {
      buildResult(fighters[0]);
    }

    const percentHealth1 = (newHP1 / fighters[0].hp) * 100;
    const percentHealth2 = (newHP2 / fighters[1].hp) * 100;
    $('#hp1').width(percentHealth1 + '%');
    $('#hp2').width(percentHealth2 + '%');
    fighters[0].hp = newHP1;
    fighters[1].hp = newHP2;
    data.setContestants(fighters[0]);
    data.setContestants(fighters[1]);
    console.error(fighters);
  }
};

const buildResult = () => {};

module.exports = fight;
