#!/bin/bash
while :
do
    /usr/bin/nodejs ./server.js tls port=31337
	sleep 1
done
