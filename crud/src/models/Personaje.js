const mongoose = require("mongoose");
const { use } = require("../routes/User");

const userSchema = mongoose.Schema({
    personaje: {
        type: String,
        required: true
    },
    anime: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('User', userSchema);