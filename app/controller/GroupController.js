'use strict';
const Group = require('../model/Group');

exports.getGroupList = async function(ctx,next){
    let list = await Group.find();
    ctx.body = {status: 200, response:list}
}