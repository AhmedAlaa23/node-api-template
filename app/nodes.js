import v from "levity-validator"

const nodes = {

	users: {
		id: {type: 'BIGINT UNSIGNED', isID: true, valid: {valid: v.isInt, params: {min:1}} },
		first_name: {type: 'VARCHAR(255)', valid: {valid: v.isText, params: {min:2,max:255}} },
		last_name: {type: 'VARCHAR(255)', valid: {valid: v.isText, params: {min:2,max:255}} },
		email: {type: 'VARCHAR(255)', default: '', valid: {valid: v.isEmail, params:{min:3,max:255}}},
		pass: {type: 'VARCHAR(255)', valid: {valid: v.isText, params: {min:6,max:255}}},
		// sessions [{refresh_tok, device_id, browser, location}, ...]
		sessions: {type: 'JSON', default: '[]', valid: {valid: v.isText, params: {min:1,max:5000}}},
		created_at: {type: 'DATETIME', valid: {valid: v.isText, params: {min:0}}},
	},

	posts: {
		id: {type: 'BIGINT UNSIGNED', isID: true, valid: {valid: v.isInt, params:{min:1}}},
		title: {type: 'VARCHAR(255)', default: '', valid: {valid: v.isText, params:{min:1,max:255}}},
		content: {type: 'TEXT', default: '', valid: {valid: v.isInt, params:{min:1,max:1000}}},
		created_at: {type: 'DATETIME'},
	}

}