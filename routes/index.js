var express = require('express');
var systemInfo = require('../utils/systemInfoUtil');

var router = express.Router();

var hostname = systemInfo.hostname();
var localIp = systemInfo.localIp();;

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Hello Kubernetes',
    hostname: hostname,
    ip: localIp 
  });
});

module.exports = router;
