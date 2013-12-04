http-mirror
===========

Node.js tool for debugging HTTP requests

Mirroring server is running at
* https://mirror.corehard.ru:31337/
* http://mirror.corehard.ru:1337/


Default mode, HTTP server on default (1337) port:
        node server.js

HTTPS on default port:
        node server.js tls

HTTP on custom port:
        node server.js port=31337

HTTPS on custom port:
        node server.js tls port=31338

