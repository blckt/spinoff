'use strict';

const Hapi = require('hapi');
const Good=require('good');
const bell=require('bell');
const server = new Hapi.Server();
server.connection({ host:'localhost',port: 3000 });
require('./db/connection');

server.register([{
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
},
require('inert'),
	bell
],(err)=>{
	if(err){
		throw err;
	}
    let config=require('./config/config');
    server.auth.strategy('facebook','bell',{
        provider:'facebook',
        password:'heNezu38uy6REkukEswaV5BrEX66ew7Y',
        isSecure:false,
        clientId:config.appID,
        clientSecret:config.secret,
        location:'http://localhost:3000'

    });
    require('./routes/index')(server);

    server.start((err) => {

		if (err) {
			throw err;
		}
		console.log('Server running at:', server.info.uri);
	});
})
