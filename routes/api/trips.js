const mongoose = require('mongoose');
const router = require('express').Router();
const Trip = require('../../models/trip.model');
const auth = require('../../middleware/auth');
var ObjectID = require('mongodb').ObjectID;
var co = require('co');
//const DaysEvent = require('../../models/daysEvent.model');

//auth param taken out for dev purposes
router.route('/').get( (req, res) => {
    Trip.find()
        .then(trips => res.json(trips))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//auth param taken out for dev purposes
router.route('/').post( (req, res) => {
    //const destination = req.body.destination;
    // const startDate = Date.parse(req.body.startDate);
    // const endDate = Date.parse(req.body.endDate);
    const newTrip = new Trip(req.body);
    // const newTrip = new Trip({
    //     destination,
    //     startDate,
    //     endDate
    // });

newTrip.save()
    .then(() => res.json('New trip added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//auth param taken out for dev purposes
router.route('/:id').get( (req, res) => {
    Trip.findById(req.params.id)
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//Delete Trip
//auth param taken out for dev purposes
router.route('/:id').delete( (req, res) => {
    Trip.findByIdAndDelete(req.params.id)
        .then(() => res.json('Trip Deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//auth param taken out for dev purposes
router.route('/update/:id').post( (req, res) => {
    Trip.findById(req.params.id)
        .then(trip => {
            trip.destination = req.body.destination;
            trip.startDate = Date.parse(req.body.startDate);
            trip.endDate = Date.parse(req.body.endDate);

            trip.save()
                .then(() => res.json('Trip updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`))
        });
});

// Add an event to specific Trip
router.route('/addEvent/:id').put( async( req, res) => {
    const tripId =  await Trip.findById(req.params.id);
       console.log(tripId);
    Trip.updateOne(
        {_id: req.params.id},
        {$addToSet: 
            {
            daysEvent:
                {
                    name: req.body.name,
                    description: req.body.description,
                    date: Date.parse(req.body.date)
                }
        
            }      
        },
        function(err, result) {
            if(err) {
                res.send(err)
            } else {
                res.send(result)
            }
        }
    );
});

// Update an event of a specific Trip
// router.route('/:tripId/updateEvent/:eventId').put( async( req, res) => {
//     const aTripId =  await Trip.findById(req.params.id);
//     const { wrap } = require('co');

//     const findDaysEvents = wrap(function*(tripId, allEvents) {
//         const trip = yield Trip.findById(tripId);

//         let trips = [allTrips]; //will hold all trips
//         let ids = [allTripsId]; //will hold IDs to search in

//         let allEvents = trip.daysEvent.length;
//         for (let i = 0; i < allEvents; i++) {
//             const thisTrip = yield Trip.find({ daysEvent: {$in: ids}});

//             ids = thisTrip.map(trip => trip._id); //replace with new IDs
//             trips = trips.concat(thisTrip); //add new trips
//         }
//         return trips;
//     });

//     findDaysEvents(aTripId, req.params.eventId)
//         .then(trip => {
//             Trip.updateOne(
//                 {_id: aTripId},
//                 {$push: 
//                     {
//                     daysEvent:
//                         {
//                             name: req.body.name,
//                             description: req.body.description,
//                             date: Date.parse(req.body.date)
//                         }
                
//                     }      
//                 },
//                 function(err, result) {
//                     if(err) {
//                         res.send(err)
//                     } else {
//                         res.send(result)
//                     }
//                 }
//             );
//             res.json(trip);
//         })
//         .catch(err => res.status(400).json(`Error: ${err}`));
// });

// Delete an Event of specific Trip
router.route('/:tripId/deleteEvent/:eventId').delete( (req, res) => {
    
})

// router.route('/updateEvent/:tripId/:eventId').put( async( req, res) => {
//     const aTripId =  await Trip.findById(req.params.id);
//     const { wrap } = require('co');

//     const findDaysEvents = wrap(function*(tripId, allEvents) {
//         const trip = yield Trip.findById(tripId);

//         let trips = [allTrips]; //will hold all trips
//         let ids = [allTripsId]; //will hold IDs to search in

//         let allEvents = trip.length;
//         for (let i = 0; i < allEvents; i++) {
//             const thisTrip = yield Trip.find({ daysEvent: {$in: ids}});

//             ids = thisTrip.map(trip => trip._id); //replace with new IDs
//             trips = trips.concat(thisTrip); //add new trips
//         }
//         return trips;
//     });

//     findDaysEvents(aTripId, req.params.eventId)
//         .then(trip => {
//             Trip.updateOne(
//                 {_id: req.params.id},
//                 {$push: 
//                     {
//                     daysEvent:
//                         {
//                             name: req.body.name,
//                             description: req.body.description,
//                             date: Date.parse(req.body.date)
//                         }
                
//                     }      
//                 },
//                 function(err, result) {
//                     if(err) {
//                         res.send(err)
//                     } else {
//                         res.send(result)
//                     }
//                 }
//             );
//         });
// });
// Remove event
// router.route('deleteEvent/:id').put( ( req, res) => {
//     const tripId =  Trip.findById(req.params.id);
    
//     const { name, description} = req.body;
//     const date =Date.parse(req.body.date);

//     const newEvent = {
//         name,
//         description,
//         date
//     };

//     Trip.updateOne(
//         {_id: tripId},
//         {$unset: newEvent},
//         function(err, result) {
//             if(err) {
//                 res.send(err)
//             } else {
//                 res.send(result)
//             }
//         }
//     );
// });

// Day Events CRUD

// router.route('/:id/daysEvent/').get((req, res) => {
//     Trip.findById(req.params.id)
//         .then(trip => res.json(trip))
//         .catch(err => res.status(400).json(`Error: ${err}`));
// });

// router.route('/:id/daysEvent/:event_id').post( async ( req, res) => {
//     const eventId = await Trip.findById(req.params.event_id);
//     let daysEvent;

//     Trips.findById(eventId)
//     .then(trip => {
//         daysEvent = trip
//     })
// });

// @ POST
// @dest push into trips daysEvent array
// router.route('/:id/daysEvent/').post( async( req, res) => {
//     const tripId = await Trip.findById(req.params.id);
    
//     const { selectedDay, event, description} = req.body;

//     const newEvent = new DaysEvent({
//         _id: new mongoose.Types.ObjectId(),
//         selectedDay,
//         event,
//         description
//     })
//     console.log(tripId);
//     console.log(tripId.daysEvent);
//     console.log(newEvent);

//     Trip.findByIdAndUpdate(
//         {_id: tripId},
//         {$addToSet: {daysEvent: newEvent}},
//         function(err, result) {
//             if(err) {
//                 res.send(err)
//             } else {
//                 res.send(result)
//             }
//         }
//     );

    //tripId.daysEvent.newEvent.push(tripId.daysEvent);

    // Trip.save()
    //     .then(() => res.json('New Event added!'))
    //     .catch(err => res.status(400).json(`Error: ${err}`));
// });


// router.route('/:id/daysEvent/delete').delete((tripId, daysEvent, res) => {
//     Trip.findByIdAndDelete(
//         {'_id': tripId, 'daysEvent._id': daysEvent._id})
//         .then(() => res.json('Trip Deleted.'))
//         .catch(err => res.status(400).json(`Error: ${err}`));
// });

//router.route('/:tripId/daysEvent')



module.exports = router;