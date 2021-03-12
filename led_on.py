# import libraries
import RPi.GPIO as GPIO
import time

# GPIO Basic initialization
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# Use a variable for the pin to use
led = 4

# Initialize your pin
GPIO.setup(led, GPIO.OUT)

# Turn on the LED
print "LED on"
GPIO.output(led, 1)

# Wait 5 seconds
time.sleep(5)

# Turn off LED
print "LED off"
GPIO.output(led, 0)

time.sleep(2)
GPIO.output(led, 1)

time.sleep(5)
GPIO.output(led, 0)
