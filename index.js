'use strict';
const koa = require('koa');
const serve = require('koa-static');
require('dotenv').config();
const port = process.env.PORT || 4000;
const app = new koa();
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        err.status = err.statusCode || err.status || 500;
        require('./config/error')(ctx, err.status, err);
    }
});
const socket = require('./app/socket');
socket(app);
app.use(serve('./public'));
require('./app/router')(app);
require('./config/mongoose')(app);
app.listen((port), () => {
    console.log(`Server started at: ${port}`)
})