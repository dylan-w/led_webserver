# led_webserver

Two versions of a node webserver to practice GPIO I/O operations.

webserver.js had the GPIOs hookup directly to a single digit 7 segment display.

webserver.js uses G17, G04, G22, G18, G23, G25, G24, G27 along with 5V and GND.

webserver_2.js used the GPIO to drive a BCD-to-7-segment decoder driver (CD4511BE) which then drove the 7 segment display.

webserver_2.js uses G12, G13, G16 and G17 along with 5v and GND.
