'use strict';
const GroupController = require('../controller/GroupController');
module.exports = function(app, Router){
    const router = new Router({prefix: '/api/group'});
    router.get('/',GroupController.getGroupList)
    app.use(router.routes()).use(router.allowedMethods());
}