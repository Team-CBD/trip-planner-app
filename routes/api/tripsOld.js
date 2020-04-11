const router = require('express').Router();
//const tripsController = require('../../controllers/tripsController');
//const uuid = require('uuid');
const Trip = require('../../models/trip.model');
const DaysEvent = require('../../models/trip.model');

// router.route('/')
//     .get(tripsController.findAll)
//     .post(tripsController.create);
    
// router.route('/:id')
//     .get(tripsController.findById)
//     .put(tripsController.update)
//     .delete(tripsController.remove);

router.route('/').get((req, res) => {
    Trip.find()
        .sort({ startDate: -1 })
        .populate('daysEvents', 'event') 
        .then(trips => res.json(trips))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const destination = req.body.destination;
    const startDate = Date.parse(req.body.startDate);
    const endDate = Date.parse(req.body.endDate);
    const photo = req.body.photo;

    const newTrip = new Trip({
        destination,
        startDate,
        endDate,
        photo
    });

newTrip.save()
    .then(() => res.json('New trip added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Trip.findById(req.params.id)
        .populate('daysEvents')
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
        .sort({ selectedDate: -1 })
        .then(daysEvent => res.json(daysEvent))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// // router.route('/:id/daysEvent/add').post((req, res) => {
// //     var trip = new Trip;
    
// //     trip.daysEvent.push({
// //         selectedDay: Date.parse(req.body.selectedDay),
// //         event: req.body.event,
// //         description: req.body.description
// //     });

// //     newEvent.save()
// //         .then(() => res.json('New Event added!'))
// //         .catch(err => res.status(400).json(`Error: ${err}`));
// // });

router.route('/:id/daysEvent/add').post((req, res) => {
    const { selectedDay, event, description, photo } = req.body;
    
    newEvent = new DaysEvent({
        selectedDay,
        event,
        description,
        photo
    });
        // trip.daysEvent.selectedDay =  selectedDay;
        // trip.dayEvent.event = event;
        // trip.dayEvent.description = description;
        // trip.dayEvent.photo = photo;

    Trip.findById(req.params.id,
        {   '$push': 
            {
                'daysEvent.selectedDay.$': selectedDay,
                'daysEvent.event.$': event,
                'daysEvent.description.$': description,
                'daysEvent.photo.$': photo
            }
        })        
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// router.route('/:trip_id/daysEvent/update').post((req, res) => {
//     Trip.findOneAndUpdate(req.params.trip_id, trip => {
        
//         Trip.daysEvent.push(newEvent);
//         })        
//         .then(() => res.json('Event updated!'))
//         .catch(err => res.status(400).json(`Error: ${err}`));

//     // Trip.save()
//     //     .then(() => res.json('New Event added!'))
//     //     .catch(err => res.status(400).json(`Error: ${err}`));
// });

// router.route('/:id/daysEvent/delete').delete((tripId, daysEvent, res) => {
//     Trip.findByIdAndDelete(
//         {'_id': tripId, 'daysEvent._id': daysEvent._id})
//         .then(() => res.json('Trip Deleted.'))
//         .catch(err => res.status(400).json(`Error: ${err}`));
// });



module.exports = router;