var mongoose = require('mongoose');
var cat = mongoose.model('cat');
var feature = mongoose.model('feature');
var async = require('async');


module.exports = {

    catget: function (req, res) {

        console.log("in get method");


        console.log(req.params._id);
        cat.findOne({ '_id': req.params.cat_id }, function (error, result) {
            if (error) {
                res.json(error);
            }
            else if (!result) {
                return res.status(400).json([])
            }
            else {
                return res.status(200).json(result);
            }
        });
    },

    catpost: function (req, res) {

        console.log("in post method");
        console.log(req.body);

        var icat = new cat();      // create a new instance of the Cat model
        icat.name = req.body.name; // set the cats name (comes from the request)
        icat.age = req.body.age;
        icat.owner = req.body.owner;


        // save the cat and check for errors
        icat.save(function (err) {
            if (err)
                res.send(err);
            else {

                var ifeature = new feature(
                    {
                        cat_id: icat._id,
                        cat_color: req.body.color,
                        cat_type: req.body.type,
                        cat_eye: req.body.eye
                    }
                )
                ifeature.save(function (err) {
                    if (err)
                        res.send(err);
                    else
                        res.json({ message: 'Cat created!' });
                });

            }
        });
    },

    catput: function (req, res) {

        console.log("in put method");
        cat.findOneAndUpdate({ _id: req.params.cat_id },
            { $set: { name: req.body.name, age: req.body.age, owner: req.body.owner } }, { new: true },
            function (err, details) {
                if (err)
                    return res.status(400).json(err)
                else {
                    return res.status(200).json({ status: true, message: "Name,Age and Owner Updated", data: details })
                }
            });
    },

    catdelete: function (req, res) {

        console.log("in delete method");
        cat.findOne({ _id: req.params.cat_id })
            .remove(function (err, details) {
                if (err) {
                    return res.status(400).json({ status: false, message: 'Databse error', data: err })
                }
                else {
                    return res.status(200).json({ status: true, message: 'Cat Removed' })
                }
            });
    }
}