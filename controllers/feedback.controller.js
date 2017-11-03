var express = require('express'),
    router = express.Router(),
    Feedback = require('../models/feedback.model').Feedback;

router.post('/', function (req, res) {
    Feedback.create(req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/', function (req, res) {
    Feedback.getAll(req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/users/:email', function (req, res) {
    Feedback.findByEmail(req.params.email, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});


module.exports = router;