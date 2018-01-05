var mongoose = require('mongoose');
var cat = mongoose.model('cat');
var feature = mongoose.model('feature');
var async = require('async');

module.exports = {

    featureget: function (req, res) {

        console.log("in get method");


        console.log(req.params.feature_id);
        feature.findOne({ '_id': req.params.feature_id })
            .populate('cat_id', { name: 1 })
            .exec(function (error, result) {
                if (error) {
                    res.json(error);
                }
                else if (!result) {
                    return res.status(400).json([])
                }
                else {
                    return res.status(200).json(result);
                }
            })




    },

    featureput: function (req, res) {


        console.log("in put method");
        feature.findOneAndUpdate({ _id: req.params.feature_id },
            { $set: { cat_color: req.body.color, cat_type: req.body.type, cat_eye: req.body.eye } }, { new: true },
            function (err, rule) {
                if (err)
                    return res.status(400).json(err)
                else {
                    return res.status(200).json({ status: true, message: "Color,Type and Eye_color Updated", data: rule })
                }
            });

    },

    featuredelete: function (req, res) {

        console.log("in delete method");
        feature.findOne({ _id: req.params.feature_id })
            .remove(function (err, rule) {
                if (err) {
                    return res.status(400).json({ status: false, message: 'Databse error', data: err })
                }
                else {
                    return res.status(200).json({ status: true, message: 'Feature Removed' })
                }
            });

    }
};