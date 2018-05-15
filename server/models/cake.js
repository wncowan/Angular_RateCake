require('../config/mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./rating');
module.exports = (() => {
    const CakeSchema = new mongoose.Schema ({
    name: {type: String, requird: true},
    image: {type: String, required: true},
    reviews: [RatingSchema]
}, {timestamps:true});
Cakes = mongoose.model('Cakes', CakeSchema);
})();
