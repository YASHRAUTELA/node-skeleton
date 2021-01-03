'use strict';
const Router = require('koa-router');
module.exports = function(app){
    const router = new Router({prefix: '/api'});
    router.get('/', (ctx) => {
        ctx.body = 'hello world';
    });
    require('./routes/user')(app, Router);
    require('./routes/group')(app, Router);
    app.use(router.routes()).use(router.allowedMethods());
}