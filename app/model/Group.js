const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GroupSchema = new Schema({
    title: {type: String},
    date: {type: Date, default:Date.now}
});

module.exports = Group = mongoose.model("groups", GroupSchema);