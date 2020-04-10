const router = require('express').Router();
//const uuid = require('uuid');
const Trip = require('../models/trip.model');

router.route('/').get((req, res) => {
    Trip.find()
        .then(trips => res.json(trips))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const destination = req.body.destination;
    const newTrip = new Trip(req.body);


newTrip.save()
    .then(() => res.json('New trip added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Trip.findById(req.params.id)
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Trip.findByIdAndDelete(req.params.id)
        .then(() => res.json('Trip Deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
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

// Day Events CRUD

router.route('/:id/daysEvent').get((req, res) => {
    Trip.findById(req.params.id)
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// router.route('/:id/daysEvent/add').post((req, res) => {
//     var trip = new Trip;
    
//     trip.daysEvent.push({
//         selectedDay: Date.parse(req.body.selectedDay),
//         event: req.body.event,
//         description: req.body.description
//     });

//     newEvent.save()
//         .then(() => res.json('New Event added!'))
//         .catch(err => res.status(400).json(`Error: ${err}`));
// });

// router.route('/:id/daysEvent/add').post((tripId, req, res) => {
//     Trip.findOneAndUpdate(
//         {'_id': tripId},
//         {
//             '$set': {
//                 'daysEvent._id': uuid,
//                 'daysEvent.selectedDay.$': req.daysEvent.selectedDay,
//                 'daysEvent.event.$': req.daysEvent.event,
//                 'daysEvent.description.$': req.daysEvent.description,
//             }
//         })        
//         .then(() => res.json('Event added!'))
//         .catch(err => res.status(400).json(`Error: ${err}`))
// });

router.route('/:trip_id/daysEvent/update').post((req, res) => {
    Trip.findOneAndUpdate(req.params.trip_id, trip => {
        newEvent = new DaysEvent();
                trip.daysEvent.selectedDay =  req.daysEvent.selectedDay;
                trip.daysEvent.event = req.daysEvent.event;
                trip.daysEvent.description = req.daysEvent.description;
        Trip.daysEvent.push(newEvent);
        })        
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));

    // Trip.save()
    //     .then(() => res.json('New Event added!'))
    //     .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id/daysEvent/delete').delete((tripId, daysEvent, res) => {
    Trip.findByIdAndDelete(
        {'_id': tripId, 'daysEvent._id': daysEvent._id})
        .then(() => res.json('Trip Deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});



module.exports = router;