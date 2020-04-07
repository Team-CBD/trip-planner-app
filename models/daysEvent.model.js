const mongoose = require('mongoose');

const daysEventSchema = new mongoose.Schema({
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
    }
});

const DaysEvent = mongoose.model('DaysEvent', daysEventSchema);

module.exports = DaysEvent;