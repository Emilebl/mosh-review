const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ // User schema that is used in MongoDB
    username: { type: String, required: true, unique: true }, // The unique: true refers to the fact that the email used is unique
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);