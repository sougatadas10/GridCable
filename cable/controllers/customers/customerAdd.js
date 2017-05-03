/* Date 3 May 2017 */
var mysql = require('mysql');

/* Add customers. */

module.exports = {
execute:function(json,res,next){
	console.log('in here3');
	//create connection
	var connection = require('../../dbUtils/createConnection');
	var mysqlConnect=connection.execute();
	
	mysqlConnect.query('INSERT INTO customer SET ?',json,function (err){
		if (err){
			console.error(err.message);
			res.render('error', {message: err.message,error: err});	
			}
		else
			console.log('insert success');
	});
	mysqlConnect.end(function(err){
		if (err){
			console.error(err.message);
			res.render('error', {message: err.message,error: err});
		}
		else
			res.render('payinfo');
	});
	}
}


