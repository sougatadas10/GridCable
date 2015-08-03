var express = require('express');
var router = express.Router();
var constants = require('../utils/constants');

router.get('/list', function(req, res, next) {
	var mongoose = require('mongoose');
	mongoose.connect(constants.SYSTEM_DB_URL);
	var AddressesModel = require('../models/addresses');
	AddressesModel.find({},function(err,address){
		if(err) return console.error(err);
		else console.log(addresses);
		mongoose.connection.close(function (err) {
			if (err) return console.error(err);
			console.log("db connection closed");
		});
	res.send(address);
	});
});


router.get('/add', function(req, res, next) {
	var mongoose = require('mongoose');
	mongoose.connect(constants.SYSTEM_DB_URL);
	var AddressesModel = require('../models/addresses');
	var addr = new AddressesModel({
					addressId:  i,
					addressType: "Official",
					addressLine1:'Kolkata ' + i,
                                        addressCity: "City",
                                        addressDist
				     });
	addr.save(function (err, addr) {
	    if (err) return console.error(err);
	});
	
        mongoose.connection.close(function (err) {
		if (err) return console.error(err);
		console.log("db connection closed");
	});

	res.send('respond with a resource');
});


module.exports = router;