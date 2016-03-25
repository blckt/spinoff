
module.exports=function(server){
	
	server.register(require('inert'),(err)=>{
		if (err) {
			throw err;
		}
		server.route({
			method: 'GET',
			path: '/',
			handler: function (request, reply) {
				reply.file('./public/index.html');
			}
		});
		server.route({
			method: 'GET',
			path: '/{name}',
			handler: function (request, reply) {
				reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
			}
		});


	});
}
