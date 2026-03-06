const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Route to get all users
router.get('/product', userController.getAllUsers);
//Route to search a user by id
router.get('/product/:id', userController.getUsersById);
//Route to create a new user
router.post('/product', userController.createUser);

module.exports = router;