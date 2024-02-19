// controllers/userController.js
const userModel = require('../models/user.models');

exports.createUser = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: "Issue in saving the user" });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log("Error getting the data:", error);
        res.status(500).json({ error: "Some error occurred" });
    }
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.userid;
    try {
        const userDelete = await userModel.findByIdAndDelete(userId);
        if (!userDelete) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: `User with id ${userId} is deleted` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Some error occurred" });
    }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.userid;
    const { name, email } = req.body;
    try {
        const updatedUser = await userModel.findByIdAndUpdate(userId, { name, email }, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Some issue occurred' });
    }
};
