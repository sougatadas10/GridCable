var mysql = require('mysql');

/* Add customers. */

module.exports = {
execute:function(){
	var mysql = require('mysql');
	var credentials = require('../utils/db/dbCredentials');
	var conn = mysql.createConnection(credentials.execute());
	conn.connect(function(err){
		if (err)
			res.render('error', {message: err.message,error: err});	
		else
			console.log('database connected');
	});
	return(conn);
}}


