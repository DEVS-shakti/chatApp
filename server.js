const express = require('express');
const http = require('http');
const { dlopen } = require('process');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

const users=[]
io.on('connection', (socket) => {
    // console.log('A user connected');
    
    // socket.on('chat message', (msg) => {
    //     io.emit('chat message', msg);
    // });

    // socket.on('disconnect', () => {
    //     console.log('User disconnected');
    // });
    
    
    
    socket.on('new-user-joined', (name) => {
        users[socket.id] = name;
        console.log('new user joined:'+name);
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',(messages) => {
        socket.broadcast.emit('receive',{message:messages,name:users[socket.id]});
    });
    socket.on('disconnect',(messages) => {
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];
    })
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
