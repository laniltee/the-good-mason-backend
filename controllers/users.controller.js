var express = require('express'),
    router = express.Router(),
    User = require('../models/user.model').User

router.post('/', function (req, res) {
    User.create(req.body, function (err, result) {
        if (!err) {
            return res.status(201).json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/:email', function (req, res) {
    User.findByEmail(req.params.email, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.post('/login', function (req, res) {
    User.findByEmail(req.body.email, function (err, result) {
        if (!err) {
            if (result == null || req.body.password != result.password) {
                res.status(401).end();
            } else {
                result.password = null;
                return res.json(result);
            }
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/', function (req, res) {
    User.getAll(req.body.email, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/:email', function (req, res) {
    User.findByEmail(req.body.email, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.put('/:id', function (req, res) {
    User.updateByEmail(req.params.id, req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});


module.exports = router;