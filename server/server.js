const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const connectDB = require('./database/database');
// const http = require('http');  // Commented out
// const socketIo = require('socket.io');  // Commented out
// const initializeSocket = require('./socket');  // Commented out

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies if your API uses cookies
    allowedHeaders: 'Content-Type,Authorization', // Add the headers your frontend is sending
    optionsSuccessStatus: 200, // Some legacy browsers choke on a 204
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB()
  .then(() => {
    //   const io = initializeSocket(server);

    // Use userRoutes for all user-related routes
    app.use('/', userRoutes);

    app.get('/', (req, res) => {
      res.json("Server is running");
    });
    app.listen(3000, console.log("server is running"))
    //  const PORT = 3000;
    //  server.listen(PORT, () => {
    //   console.log(`Server is running on port ${PORT}`);
    //  });
  })
  .catch((error) => {
    console.log('Error starting the server:', error);
  });
