#!/usr/bin/env python

import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)

#to use GPIOnumbers to configure
#write GPIO.BCM instead of GPIO.BOARD
#then below, write GPIO.setup(4, GPIO.IN)
GPIO.setup(7,GPIO.IN)

while True:
	input = GPIO.input(7)
	print input
