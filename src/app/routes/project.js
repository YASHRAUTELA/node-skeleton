const controller = require('../controller/ProjectController');
function getProjectHome(ctx) { ctx.body = "Project Home Page" }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/project' });
    router.get('project', '/', getProjectHome);
    router.get('/list', controller.getProjectList);
    router.get('/test', controller.test);
    app.use(router.routes()).use(router.allowedMethods());
}