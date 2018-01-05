var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var catSchema   = new Schema({
    name: String,
    age: Number,
    owner: String
});
module.exports = mongoose.model('cat',catSchema);