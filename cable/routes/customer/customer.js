var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended : true}));


router.post('/add', function(req, res, next) {
var customerAdd = require('../../controllers/customers/customerAdd');
customerAdd.execute({
	customerName:req.body.customerName,
	houseNumber:req.body.houseNumber
	},res,next);
});

router.get('/list', function(req, res, next) {
	var customerList = require('../../controllers/customers/customerList');
	res.send(customerList.execute(res,next));
});

module.exports = router;
