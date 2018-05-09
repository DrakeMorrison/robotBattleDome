'use strict';
let contestants = [];

const getContestants = () => {
  return contestants;
};

const setContestants = (botObj) => {
  contestants.unshift(botObj);
  contestants = contestants.slice(0, 2);
};

module.exports = {
  getContestants,
  setContestants,
};
