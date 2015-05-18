var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json(['got result']);
});

module.exports = router;
