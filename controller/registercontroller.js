var express = require('express');
var router = express.Router();
var user = require('../model/usermodel.js');

router.get('/', function (req, res) {
    console.log('in register')
    res.render('register');
});

router.post('/', function (req, res) {

    new user({
        username: req.body.username,
        password: req.body.password

    }).save(function (err, docs) {
        if (err) {
            res.json(err);
        }
        else {
            //res.send('success Inserted !');
            // res.render('index', { title: 'Login' });
            res.redirect('/')
        }
    });
    

    
});

module.exports = router;