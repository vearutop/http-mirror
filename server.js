var port = 1337,
    server,
    clientCallback = function (socket) {
        socket.on('data', function (data) {
            socket.write('HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\n');

            socket.write(data);
            socket.end();
        });
    };

process.argv.forEach(function (val, index, array) {
    val = val.split('=');

    if (val[0] == 'tls') {
        var options = {
            pfx: require('fs').readFileSync('server.pfx')
        };
        server = require('tls').createServer(options, clientCallback);
    }

    else if (val[0] == 'port') {
        port = val[1];
    }

});

if (!server) {
    server = require('net').createServer(clientCallback);
}

server.listen(port);
