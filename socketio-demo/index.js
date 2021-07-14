const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });

    socket.on('chat message', (msg) => {
        console.log(msg);
        io.emit('chat message', `${socket.id.substr(0, 2)} : ${msg}`);
    });
})

server.listen(8080, () => {
    console.log('listening on http://localhost:8080')
});