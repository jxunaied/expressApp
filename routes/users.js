const userController = require('../controller/user');
var express = require('express');
var router = express.Router();

/* Users listing. */
router.get('/', userController.getUser);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
