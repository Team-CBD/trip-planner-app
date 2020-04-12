const mongoose = require('mongoose');
//const daysEventSchema = require('./daysEvent.model');
// const daysEventSchema = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     tripDestination: { 
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'Trip' 
//     },
//     selectedDay: {
//         type: Date,
//         required: [true, 'A date for your event is required'],
//     },
//     event: {
//         type: String,
//         required: [true, 'A name for your trip is required'],
//         trim: true
//     },
//     description: {
//         type: String,
//         trim: true
//     }
// });
const tripSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: [true, 'A name for your trip is required'],
        trim: true
    },
    daysEvent: [
        {
          name: {
            type: String,
            trim: true,
            required: "You must enter a City Name"
          },
          description: {
            type: String,
            required: "You must enter a Description"
          },
          date: {
            type: Date,
            default: Date.now,
            required: "You must enter a Date"
          }
        }
      ],
    startDate: {
        type: Date,
        default: Date.now,
        required: "You must enter a Start Date"
    },
    endDate: {
        type: Date,
        required: "You must enter an End Date"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    // daysEvent:  [{
    //     index: { unique: true},
    //     type: mongoose.Schema.Types.ObjectId, 
    //      ref: 'DaysEvent'  
    // }]
});
//const DaysEvent = mongoose.model('DaysEvent', daysEventSchema);
const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;