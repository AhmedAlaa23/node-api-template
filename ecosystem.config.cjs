require('dotenv').config()

const env = process.env.NODE_ENV;

const pm2ProsesEnv = env ?? 'dev';

module.exports = {
  apps : [{
    name: `node-api-template-${pm2ProsesEnv}`,
    script: "./app/app.js",
		watch : true
  }]
}