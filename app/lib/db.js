import {createDBPool, DBEnd as DBTerminate, enableDebugging as mysqlEnableDebugging} from 'levity-mysql'
import config from './../config.js'

const DBInit = ()=>{
	createDBPool({
		connectionLimit : 50,
		host			: config.DB_HOST,
		user			: config.DB_USER,
		password	: config.DB_PASS,
		database	: config.DB_NAME,
		charset		: 'utf8mb4_unicode_ci',
		timezone	: '+00:00',
		dateStrings: true, // return dates as strings not JS date objects
		multipleStatements: true
	});
}

const DBEnd = async()=>{
	return DBTerminate();
}

export {DBInit, DBEnd, mysqlEnableDebugging}