//: Imports :
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//: Importation for home security :
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//: All routes for user management
router.get('/users/:id', auth, userCtrl.getOneUser);
router.get('/users', userCtrl.getAllUsers);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/edit', auth, multer, userCtrl.editUser);
router.delete('/users/:id', auth, userCtrl.deleteUserAccount);

module.exports = router;