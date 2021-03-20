function getUserHome(ctx) { ctx.body = "User Home Page" }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/user' });
    router.get('user', '/', getUserHome);
    app.use(router.routes()).use(router.allowedMethods());
}