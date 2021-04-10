const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: "user name is required"
        },
        email: {
            type: String, 
            unique: true,
            required: "email is required",
            match: [/.+@.+\..+/, "please use a valid email address"]
        },
        thoughts: {

        },
        friends: {

        }
    }
);


const User = model('User', UserSchema);

module.exports = User;