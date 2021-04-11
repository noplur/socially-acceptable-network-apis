const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function () {
    // return this.friends.reduce((total, friend) => total + friend?.reactions?.length, 0);
    return this.friends.length
});


const User = model('User', UserSchema);

module.exports = User;