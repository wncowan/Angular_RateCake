 module.exports = () => {
    require('../models/cake');
    require('../models/rating');
    const mongoose = require('mongoose');
    return {
        displayDessert: (req, res) => {
            Cakes.find({}, (err, data) =>{
                if(err){
                    console.log("There's an error");
                    res.json(err);
                }
                else {
                    console.log("Success");
                    res.json(data);
                }
            });
        },
        createDessert: (req, res) => {
            let newDessert = new Cakes ({
                name: req.body.name,
                image: req.body.image
            });
            newDessert.save((err, data) =>{
                if(err){
                    console.log("Saving is unsuccessful");
                    res.json(err);
                }
                else {
                    console.log("Successfully saved");
                    res.json(data);
                }
            })
        },
        addComment: (req, res) => {
            let newComment = new Ratings ({
                rating: req.body.rating,
                comment: req.body.comment,
                cake: req.params.id
            })
            console.log(newComment);
            Cakes.findOne({_id: req.params.id}, (err,data) => {
                console.log(data);
                data.reviews.push(newComment);
                data.save((err,data)=> {
                    if(err){
                        console.log("unsuccessful");
                        res.json(err);
                    }
                    else{
                        console.log("successful");
                        res.json(data);
                    }
                });
            })
        },
        dessertRatings: (req, res) =>{
            console.log("I am in the controllers for the dessert ratings");
            Cakes.findOne({_id:req.params.id})
                // .populate('reviews') not working
                .exec(function (err, data){
                if(err){
                    console.log("error loading the comments");
                    res.json(err);
                }
                else {
                    console.log("success!");
                    res.json(data);
                    // var ObjectId = mongoose.Types.ObjectId; 
                    // console.log("successfully loaded comments");
                    // Ratings.find({cake: new ObjectId(data._id)})
                    // .populate('cake').exec((err2, data2) => {
                    //     res.json({data, reviews: data2});
                    // })
                }
            })
        
        }
    }
}


 
