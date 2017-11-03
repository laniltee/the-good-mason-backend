var express = require('express'),
    router = express.Router(),
    Provider = require('../models/provider.model').Provider,
    Comment = require('../models/comment.model').Comment;

router.post('/', function (req, res) {
    Provider.create(req.body, function (err, result) {
        if (!err) {
            return res.status(201).json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/', function (req, res) {
    Provider.getAll(req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/:id', function (req, res) {
    Provider.get({ _id: req.params.id }, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/comments/:id', function (req, res) {
    Comment.findByProvider({ _id: req.params.id }, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.post('/comments', function (req, res) {
    Comment.create(req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/comments_user/:email', function (req, res) {
    Comment.findByEmail(req.params.email, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.delete('/comments_user/:id', function (req, res) {
    Comment.findByIdAndRemove(req.params.id, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/services/:service', function (req, res) {
    Provider.findByService(req.params.service, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/search/name/:name', function (req, res) {
    Provider.searchByName(req.params.name, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/search/location/:location', function (req, res) {
    Provider.searchByLocation(req.params.location, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});

router.get('/search/categories', function (req, res) {
    Provider.getCategories(function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
});


module.exports = router;