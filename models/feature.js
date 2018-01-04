var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var featureSchema = new Schema({

    cat_id: { type: ObjectId, ref: 'cat' },
    cat_color: { type: String },
    cat_type: { type: String }

});

module.exports = mongoose.model('feature', featureSchema);