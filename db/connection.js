var mongoose=require('mongoose');
var config=require('../config/config');
mongoose.connect(config.dbUrl,function(err){
	if(err) throw err;
	console.log('connected');
});