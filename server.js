'use strict';

const Hapi = require('hapi');
const Good=require('good');

const server = new Hapi.Server();
server.connection({ port: 3000 });

require('./routes/index')(server);
server.register({
	register:Good,
	options:{
		reporters:[{
			
			reporter:require('good-console'),
			events:{
				response:'*',
				log:'*'
			}

		}]
	}
},(err)=>{
	if(err){
		throw err;
	}
	server.start((err) => {

		if (err) {
			throw err;
		}
		console.log('Server running at:', server.info.uri);
	});
})
