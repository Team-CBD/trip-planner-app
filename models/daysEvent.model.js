const mongoose = require('mongoose');
//const TripSchema = ('./trip.model');

const daysEventSchema = mongoose.Schema({
   // _id: mongoose.Schema.Types.ObjectId,
    date: {
        type: Date
    },
    name: {
        type: String,
        required: [true, 'A name for your event is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});

const DaysEvent = mongoose.model('DaysEvent', daysEventSchema);

module.exports = DaysEvent;