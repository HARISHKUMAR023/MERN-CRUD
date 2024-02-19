// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

router.post('/post', userController.createUser);
router.get('/getdata', userController.getAllUsers);
router.delete('/del/:userid', userController.deleteUser);
router.put('/up/:userid', userController.updateUser);

module.exports = router;
