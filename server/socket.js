// socket.js
const socketIo = require('socket.io');

const initializeSocket = (server) => {
    const io = socketIo(server, {
        cors: {
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log('Client connected');

        // You can emit an event when a new record is added
        // For example, emit 'newRecord' event whenever a new record is added
        // socket.emit('newRecord', newData);

        // Handle disconnect
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });

    return io;
};

module.exports = initializeSocket;
