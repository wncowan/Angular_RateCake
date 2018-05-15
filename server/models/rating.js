require('../config/mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


module.exports = (()=>{
    RatingSchema = new mongoose.Schema ({
        rating: {type:String, required: [true,"Rating is required"]},
        comment: {type: String, required: [true, "Comment is required"]},
        // cake: {type: Schema.Types.ObjectId, ref: 'Cakes'}
    }, {timestamps: true });
    Ratings = mongoose.model('Ratings', RatingSchema);
})();
