'use strict';
const buildRobot1 = require('./robots.js').buildRobot1;
const buildRobot2 = require('./robots.js').buildRobot2;
const fight = require('./fight.js');

const addEvents = () => {
  $('#fight-btn').on('click', fight);
  $('.select-robot1').on('click', buildRobot1);
  $('.select-robot2').on('click', buildRobot2);
};

module.exports = addEvents;
