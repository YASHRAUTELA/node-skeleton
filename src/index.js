const Koa = require('koa');
const Router = require('koa-router');
require('dotenv').config({ path: './src/.env' })
const app = new Koa();
require('./app/bootstrap');
const port = process.env.PORT || 3000;
require('./router')(app, Router);
app.listen(port, () => { console.log(`listen to port ` + port) });