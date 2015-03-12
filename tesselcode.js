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

// Configure servos so range of motion is correct

// Motion functions
function bendThumb() {
  servos.move(thumbFront, 1);
  servos.move(thumbBack, 0);
}

function flexThumb() {
  servos.move(thumbFront, 0);
  servos.move(thumbBack, 1);
}
