import dotenv from 'dotenv'
dotenv.config()

const env = process.env.NODE_ENV;
const PROD_PORT = process.env.PROD_PORT;
const DEV_PORT = process.env.DEV_PORT;
const TEST_PORT = process.env.TEST_PORT;

const DEV_DB_HOST = process.env.DEV_DB_HOST;
const DEV_DB_USER = process.env.DEV_DB_USER;
const DEV_DB_PASS = process.env.DEV_DB_PASS;
const DEV_DB_NAME = process.env.DEV_DB_NAME;

const TEST_DB_HOST = process.env.TEST_DB_HOST;
const TEST_DB_USER = process.env.TEST_DB_USER;
const TEST_DB_PASS = process.env.TEST_DB_PASS;
const TEST_DB_NAME = process.env.TEST_DB_NAME;

const PROD_DB_HOST = process.env.PROD_DB_HOST;
const PROD_DB_USER = process.env.PROD_DB_USER;
const PROD_DB_PASS = process.env.PROD_DB_PASS;
const PROD_DB_NAME = process.env.PROD_DB_NAME;

const configOptions = {
	dev:{
		env: 'dev',
		port: DEV_PORT || 3000,
		baseUrl: `http://localhost:${DEV_PORT}`,
		DB_HOST: DEV_DB_HOST,
		DB_USER: DEV_DB_USER,
		DB_PASS: DEV_DB_PASS,
		DB_NAME: DEV_DB_NAME,
	},

	test:{
		env: 'test',
		port: TEST_PORT || 3000,
		baseUrl: `http://localhost:${TEST_PORT}`,
		DB_HOST: TEST_DB_HOST,
		DB_USER: TEST_DB_USER,
		DB_PASS: TEST_DB_PASS,
		DB_NAME: TEST_DB_NAME,
	},

	prod:{
		env: 'prod',
		port: PROD_PORT || 4000,
		baseUrl: `http://localhost:${PROD_PORT}`,
		DB_HOST: PROD_DB_HOST,
		DB_USER: PROD_DB_USER,
		DB_PASS: PROD_DB_PASS,
		DB_NAME: PROD_DB_NAME,
	}
}

const config = configOptions[env] || configOptions['dev'];

export default config