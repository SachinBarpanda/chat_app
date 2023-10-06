const express = require('express')
const app = express();

const http = require('http');
const server = http.createServer(app);//request listener
const path = require('path');
const socketio = require('socket.io')
const io = socketio(server);

const users = {

}

// for static files 
app.use('/',express.static(path.join(__dirname,'public')));

io.on('connection', (socket)=>{
    console.log(`connection established at ${socket.id}`);

    socket.on('send-msg',(data)=>{
        // console.log(data);
        // socket.emit('recieved-msg',{
        io.emit('recieved-msg',{
            msg:data.msg,
            id:socket.id,
            username:users[socket.id]
        })
    }) //listen to some event

    socket.on('login',(data)=>{
        // console.log(data);
        users[socket.id] = data.username; 
    })
})




const port = process.env.PORT || 3000;

server.listen(port,()=>{
    console.log(`server connected at port ${port}`)
})