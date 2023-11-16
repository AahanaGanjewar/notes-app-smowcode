const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.post('/notes', authMiddleware.authenticate, usersController.addNote);
router.get('/notes', authMiddleware.authenticate, usersController.getNotes);

module.exports = router;
