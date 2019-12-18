var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('src'));
app.get('/', function (req, res) {
    res.sendfile('src/pages/index.html');
});

io.on('connection', function (socket) {
    console.log('user connected');
    socket.on('printTheNumber', function (number) {

        io.sockets.emit('lcdNumbers', number);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(4700, function () {
    console.log('listening on localhost:4700');
});
