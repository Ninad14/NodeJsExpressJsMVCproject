var express = require('express');
var router = express.Router();
var User = require('../model/usermodel.js');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Login' });
});



router.post('/', function (req, res) {
    var name = req.body.username;
    var pwd = req.body.password;
    User.findOne({ username: name }, function (err, u) {
        if (err) throw err;
        if (pwd == u.password) {
            res.render('maincontainerpage')
        } else {
            res.render('index', { title:'Login' })
        }

    });
});
module.exports = router;