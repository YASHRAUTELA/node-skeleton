const User = require('../model/User');
module.exports = {
    async getUserList(ctx){
        try{
            var users = await User.find().populate("projects");
            ctx.body = {data: users};
        }catch(error){
            ctx.throw(error);
        }
    },

    async test(ctx){
        try{
            var user = await User.create({name: "Yashwant", age: "12"});
            ctx.body = user;
        }catch(error){
            ctx.throw(error);
        }
    }
}