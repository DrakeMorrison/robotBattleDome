'use strict';
const contestants = [];

const getContestants = () => {
  return contestants;
};

const setContestant1 = (botObj) => {
  contestants[0] = botObj;
};

const setContestant2 = (botObj) => {
  contestants[1] = botObj;
};

module.exports = {
  getContestants,
  setContestant1,
  setContestant2,
};
