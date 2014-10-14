#!/usr/bin/python

import urllib2

print "Content-type: text/json"
print "\n"

response = urllib2.urlopen('http://api.espn.com/v1/sports/football/nfl/teams/9/news?apikey=cehem3gjxtwbgs9t3djrrxf8')

res = response.read()

print res
