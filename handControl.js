var tessel = require('tessel');
var servos = require('servo-pca9685').use(tessel.port['A']);

// Match servos to actions
var thumbFront = 1;
var thumbBack = 2;
var indexFront = 3;
var indexBack = 4;
var middleFront = 5;
var middleBack = 6;
var ringFront = 7;
var ringBack = 8;
var pinkyFront = 9;
var pinkyBack = 10;


// Motion functions
function bendThumb() {
  servos.move(thumbFront, 1);
  servos.move(thumbBack, 0);
}

function flexThumb() {
  servos.move(thumbFront, 0);
  servos.move(thumbBack, 1);
}

function bendIndex() {
  servos.move(indexFront, 1);
  servos.move(indexBack, 0);
}

function flexIndex() {
  servos.move(indexFront, 0);
  servos.move(indexBack, 1);
}

function bendMiddle() {
  servos.move(middleFront, 1);
  servos.move(middleBack, 0);
}

function flexMiddle() {
  servos.move(middleFront, 0);
  servos.move(middleBack, 1);
}

function bendRing() {
  servos.move(ringFront, 1);
  servos.move(ringBack, 0);
}

function flexRing() {
  servos.move(ringFront, 0);
  servos.move(ringBack, 1);
}

function bendPinky() {
  servos.move(pinkyFront, 1);
  servos.move(pinkyBack, 0);
}

function flexPinky() {
  servos.move(pinkyFront, 0);
  servos.move(pinkyBack, 1);
}
