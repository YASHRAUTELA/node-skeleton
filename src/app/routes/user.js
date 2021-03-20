const controller = require('../controller/UserController');
function getUserHome(ctx) { ctx.body = "User Home Page" }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/user' });
    router.get('user', '/', getUserHome);
    router.get('/list', controller.getUserList);
    router.get('/test', controller.test);
    app.use(router.routes()).use(router.allowedMethods());
}