const buildRobots = require('./robots.js').buildRobots;
const fight = require('./robots.js').fight;

const addEvents = () => {
  $('#fight-btn').on('click', fight);
  $('select').on('click', buildRobots); // may need to change to bootstrap dropdown again. to fill the dom once we select a bot.
};

module.exports = addEvents;
