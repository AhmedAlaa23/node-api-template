import application from 'levity-server';
import config from './config.js'

import {DBInit, mysqlEnableDebugging} from './lib/db.js';

var app = application();

app.listen(config.port, ()=>{
	console.log(`${config.env} Server Listening on ${config.port}`);
});

app.setRouter({
	nodes: {
		'/users': {
			paths:{
				'/': {
					methods: {
						'GET': {handler: searchUsers},
						'POST': {handler: addUser},
					},
				},
				'/{id}': {
					methods: {
						"GET": {handler: getUser},
						"PUT": {handler: editUser},
					}
				}
			},
		},

		'/posts': {
			paths:{
				'/': {
					methods: {
						'GET': {handler: searchPosts},
						'POST': {handler: addPost},
					},
				},
				'/{id}': {
					methods: {
						"GET": {handler: getPost},
						"PUT": {handler: editPost},
					}
				},
			},
		},

	},

	errHandler: errHandler,
	notFoundHandler: notFoundHandler
});

app.setAccessControl({ AccessControlAllowOrigin: '*', AccessControlAllowMethods: ['GET','POST','PUT','DELETE','OPTIONS'] });
app.CORSPreFlight();

function errHandler({err, routePath, res}){
	console.log("err: ", err);
	return res.errJson({status: 'err', 'err': err});
}

function notFoundHandler({reqPath, res}){
	console.log("Not Found: ", reqPath);
	return res.respond({status: 404, contentType: 'application/json', body: JSON.stringify({status: 404, msg: 'Not Found'}) });
}

DBInit();
mysqlEnableDebugging({showConnectionId: true, showSqlQuery: false});