'use strict';
module.exports = function(app, Router){
    const router = new Router({prefix: '/api/user'});
    router.get('/', (ctx) => {
        ctx.body = 'hello user world';
    });
    app.use(router.routes()).use(router.allowedMethods());
}