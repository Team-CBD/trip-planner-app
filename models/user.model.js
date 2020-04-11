const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, 'First name required']
    },
    lName: {
        type: String,
        required: [true, 'Last name required']
    },    
    email: {
        type: String,
        required: [true, 'Email address required'],
        unique: [true, 'That email has already been registered'],
        trim: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password required']
    },
    tripsList: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Trip'
        }
    ],
    friendsList: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;