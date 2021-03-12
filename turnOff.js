var Gpio = require('onoff').Gpio;

var g17 = new Gpio(17, 'out');
var g04 = new Gpio(4, 'out');
var g22 = new Gpio(22, 'out');
var g18 = new Gpio(18, 'out');
var g23 = new Gpio(23, 'out');
var g25 = new Gpio(25, 'out');
var g24 = new Gpio(24, 'out');
var g27 = new Gpio(27, 'out');

g17.writeSync(0);
g04.writeSync(0);
g22.writeSync(0);
g18.writeSync(0);
g23.writeSync(0);
g25.writeSync(0);
g24.writeSync(0);
g27.writeSync(0);

console.info('LEDs off!');
