const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'First name required']
    },   
    relation: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone Required']
    }
    // ,
    // tripsList: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId, 
    //         ref: 'Trip'
    //     }
    // ]
});

const Friend = mongoose.model('Friend', userSchema);

module.exports = Friend;