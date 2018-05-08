const robot = {
  name: '',
  health: 0,
  dmg: 0,
  moveType: undefined,
  weapon: undefined,
};

const drone = Object.create(robot);
drone.moveType = 'flight';
const snake = Object.create(robot);
snake.moveType = 'slithering';
const atv = Object.create(robot);
atv.moveType = 'wheeled';

const buildRobots = (e) => {
  console.error(e);
  const id1 = $('#select1').val();
  const id2 = $('#select2').val();
  checkType(id1);
  checkType(id2);
};

const checkType = (typeId) => {
  switch (typeId) {
    case 'asmodeus':
      buildSnake('asmodeus', 'acid venom');
      break;
    case 'simon':
      buildSnake('simon', 'squeeze attack');
      break;
    case 'blue-boy':
      buildDrone('blue boy', 'Tazer');
      break;
    case 'vox-amon':
      buildDrone('vox amon', '');
      break;
    case 'the-flamespeaker':
      buildATV();
      break;
    case 'the-grinder':
      buildATV();
      break;
  }
};

const buildSnake = () => {};

const buildDrone = () => {};

const buildATV = () => {};

const fight = () => {
  console.error('the fight began');
};

module.exports = {
  buildRobots,
  fight,
};
