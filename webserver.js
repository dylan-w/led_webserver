var Gpio = require('onoff').Gpio;

var g17 = new Gpio(18, 'out');
var g04 = new Gpio(4, 'out');
var g22 = new Gpio(22, 'out');
var g18 = new Gpio(17, 'out');
var g23 = new Gpio(23, 'out');
var g25 = new Gpio(25, 'out');
var g23 = new Gpio(23, 'out');
var g24 = new Gpio(24, 'out');
var g27 = new Gpio(27, 'out');

var http = require('http').createServer(function handler(req, res) {
	var url = req.url;
	console.info('Received: ' + url);
	res.write('Received: ' + url);
	
	switch (url) {
		case '/0':
			console.info('Handle 0');
			g17.writeSync(1);
			g04.writeSync(1);
			g22.writeSync(1);
			g18.writeSync(1);
			g23.writeSync(1);
			g25.writeSync(1);
			g24.writeSync(0);
			break;
		case '/1':
			console.info('Handle 1');
			g17.writeSync(0);
			g04.writeSync(0);
			g22.writeSync(0);
			g18.writeSync(0);
			g23.writeSync(1);
			g25.writeSync(1);
			g24.writeSync(0);
			break;
		case '/2':
			console.info('Handle 2');
			g17.writeSync(1);
			g04.writeSync(1);
			g22.writeSync(0);
			g18.writeSync(1);
			g23.writeSync(1);
			g25.writeSync(0);
			g24.writeSync(1);
			break;
		case '/3':
			console.info('Handle 3');
			g17.writeSync(1);
			g04.writeSync(1);
			g22.writeSync(1);
			g18.writeSync(1);
			g23.writeSync(0);
			g25.writeSync(0);
			g24.writeSync(1);
			break;
		case '/4':
			console.info('Handle 4');
			g17.writeSync(0);
			g04.writeSync(1);
			g22.writeSync(1);
			g18.writeSync(0);
			g23.writeSync(0);
			g25.writeSync(1);
			g24.writeSync(1);
			break;
		case '/5':
			console.info('Handle 5');
			g17.writeSync(1);
			g04.writeSync(0);
			g22.writeSync(1);
			g18.writeSync(1);
			g23.writeSync(0);
			g25.writeSync(1);
			g24.writeSync(1);
			break;
		case '/6':
			console.info('Handle 6');
			g17.writeSync(1);
			g04.writeSync(0);
			g22.writeSync(1);
			g18.writeSync(1);
			g23.writeSync(1);
			g25.writeSync(1);
			g24.writeSync(1);
			break;
		case '/7':
			console.info('Handle 7');
			g17.writeSync(1);
			g04.writeSync(1);
			g22.writeSync(1);
			g18.writeSync(0);
			g23.writeSync(0);
			g25.writeSync(0);
			g24.writeSync(0);
			break;
		case '/8':
			console.info('Handle 8');
			g17.writeSync(1);
			g04.writeSync(1);
			g22.writeSync(1);
			g18.writeSync(1);
			g23.writeSync(1);
			g25.writeSync(1);
			g24.writeSync(1);
			break;
		case '/9':
			console.info('Handle 9');
			g17.writeSync(1);
			g04.writeSync(1);
			g22.writeSync(1);
			g18.writeSync(0);
			g23.writeSync(0);
			g25.writeSync(1);
			g24.writeSync(1);
			break;
		default:
			console.info('Handle unknown');
			g17.writeSync(0);
			g04.writeSync(0);
			g22.writeSync(0);
			g18.writeSync(0);
			g23.writeSync(0);
			g25.writeSync(0);
			g24.writeSync(1);
		
	}

	res.writeHead(200);
	res.end('The End');
});

http.listen(8080);
console.info('Listening on 8080.');
