const mongoose = require('mongoose');
//const TripSchema = ('./trip.model');

const daysEventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    selectedDay: {
        type: Date,
        required: [true, 'A date for your event is required'],
    },
    event: {
        type: String,
        required: [true, 'A name for your trip is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    photo: {
        type: String
    }
});

const DaysEvent = mongoose.model('DaysEvent', daysEventSchema);

module.exports = DaysEvent;