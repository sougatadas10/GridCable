var mysql = require('mysql');

/* Get customers listing. */

module.exports = {
execute:function(res,next){
	console.log('in here3');
	//create connection
	var connection = require('../../dbUtils/createConnection');
	var mysqlConnect=connection.execute();
	var viewRows;
	
	var resultSet = mysqlConnect.query('SELECT * FROM customer',function (err,rows,fields){
		if (err){
			console.error(err.message);
			res.render('error', {message: err.message,error: err});	
			}
		else{
			console.log('select success');
			for (var i in rows){
				console.log(rows[i]);
				}
			viewRows = rows;
			}
	});
	mysqlConnect.end(function(err){
		if (err){
			console.error(err.message);
			res.render('error', {message: err.message,error: err});
		}
		else
			return(viewRows);
		
	});
	}
}
