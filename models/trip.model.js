const mongoose = require('mongoose');
//const daysEventSchema = require('./daysEvent.model');

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

const tripSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: [true, 'A name for your trip is required'],
        trim: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    daysEvent: [ daysEventSchema ]
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;