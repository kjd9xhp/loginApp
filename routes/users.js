var express = require('express');
var router = express.Router();
var user = require('../controllers/user')
const userService = require('../service/User.service')


/* GET users listing. */
// router.get('/', User.all)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', user.all)

module.exports = router;
