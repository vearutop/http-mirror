#!/bin/bash
while :
do
    /usr/local/bin/node ~/app/http-mirror/server.js tls port=31337
	sleep 1
done
