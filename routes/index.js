var  request=require('request'),
promise=require('promise'),
config=require('../config/config');

module.exports=function(server){

	
		server.route({
			method: 'GET',
			path: '/',
			handler: function (request, reply) {
				reply.file('./public/index.html');
			}
		});

	server.route({
        method:'*',
        path:'/auth',
        config:{
            auth:{
                strategy:'facebook',
                mode:'try'
            }
        },
        handler:function (req,reply) {
            if(!req.auth.isAuthenticated){
                return reply('Auth failed due:'+req.auth.error);
            } else {
            }

        }
    })
	
}
