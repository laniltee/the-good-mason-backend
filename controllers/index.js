//This is the main controller which binds every other sub controllers
var express = require('express'),
    router = express.Router();

router.use('/feedback', require('./feedback.controller'));
router.use('/users', require('./users.controller'));
router.use('/providers', require('./providers.controller'));
router.use('/health', require('./health.controller'));

module.exports = router;