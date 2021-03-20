const User = require('../model/User');
const Project = require('../model/Project');
module.exports = {
    async getProjectList(ctx){
        try{
            var projects = await Project.find().populate("users");
            ctx.body = {data: projects};
        }catch(error){
            ctx.throw(error);
        }
    },

    async test(ctx){
        try{
            var project = await Project.findOne({_id: "60564584b3f815aca28c8243"});
            project.users.push("6056437fe4279eab7db9333b");
            project.save();
            ctx.body = project;
        }catch(error){
            ctx.throw(error);
        }
    }
}