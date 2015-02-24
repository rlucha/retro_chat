var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var router = express.Router();

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(5000);

/* ROUTES */

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


router.get('/chatroom', function(req, res) {
    res.sendFile(__dirname + '/chatroom.html');
});

router.get('/app.css', function(req, res) {
    res.sendFile(__dirname + '/app.css');
});


app.use('/', router);