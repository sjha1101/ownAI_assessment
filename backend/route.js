const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/', Controller.index);
router.post('/store',Controller.store);
router.post('/login',Controller.login);
router.get('/show/:id',Controller.show);

module.exports = router;