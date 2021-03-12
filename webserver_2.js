var Gpio = require('onoff').Gpio;

var a = new Gpio(12, 'out');
var b = new Gpio(13, 'out');
var c = new Gpio(16, 'out');
var d = new Gpio(17, 'out');

var http = require('http').createServer(function handler(req, res) {
	var url = req.url;
	console.info('Received: ' + url);
	res.write('Received: ' + url);
	
	switch (url) {
		case '/0':
			console.info('handle 0');
			a.writeSync(0);
			b.writeSync(0);
			c.writeSync(0);
			d.writeSync(0);
			break;
		case '/1':
			console.info('handle 1');
			a.writeSync(1);
			b.writeSync(0);
			c.writeSync(0);
			d.writeSync(0);
			break;
		case '/2':
			console.info('handle 2');
			a.writeSync(0);
			b.writeSync(1);
			c.writeSync(0);
			d.writeSync(0);
			break;
		case '/3':
			console.info('handle 3');
			a.writeSync(1);
			b.writeSync(1);
			c.writeSync(0);
			d.writeSync(0);
			break;
		case '/4':
			console.info('handle 4');
			a.writeSync(0);
			b.writeSync(0);
			c.writeSync(1);
			d.writeSync(0);
			break;
		case '/5':
			console.info('handle 5');
			a.writeSync(1);
			b.writeSync(0);
			c.writeSync(1);
			d.writeSync(0);
			break;
		case '/6':
			console.info('handle 6');
			a.writeSync(0);
			b.writeSync(1);
			c.writeSync(1);
			d.writeSync(0);
			break;
		case '/7':
			console.info('handle 7');
			a.writeSync(1);
			b.writeSync(1);
			c.writeSync(1);
			d.writeSync(0);
			break;
		case '/8':
			console.info('handle 8');
			a.writeSync(0);
			b.writeSync(0);
			c.writeSync(0);
			d.writeSync(1);;
			break;
		case '/9':
			console.info('handle 9');
			a.writeSync(1);
			b.writeSync(0);
			c.writeSync(0);
			d.writeSync(1);
			break;
		default:
			a.writeSync(1);
			b.writeSync(1);
			c.writeSync(1);
			d.writeSync(1);
	}

	res.writeHead(200);
	res.end('The End');
});

http.listen(8080);
console.info('Listening on 8080.');
