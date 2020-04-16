const router = require('express').Router({ mergeParams: true });
const DaysEvent = require('../../models/daysEvent.model');
const Trip = require('../../models/trip.model');
const auth = require('../../middleware/auth');

router
    .route('/')
    .get((req, res, next) => 
        Trip.findById(req.params.tripId)
        .populate('daysEvent')
        .exec()
        .then(trip => res.json(trip))
        .catch(err => next(`Error: ${err}`))
    )
    .post((req, res, next) => {
        //build new daysEvent
        const newDaysEvent = new DaysEvent(req.body);
        newDaysEvent.trip = req.params.tripId;

        //find trip doc
        return Trip.findById(req.params.tripId)
            .then(trip => 
                //save new daysEvent doc
                newDaysEvent.save()
                    .then(createdDaysEvent => {
                        //add new daysEvent ID to trip doc
                        trip.daysEvent.push(createdDaysEvent._id);
                        return trip
                            .save()
                            .then(() => res.json('New event added'))
                            .catch(err => next(`Error: ${err}`));
                    })
                    .catch(err => next(`Error: ${err}`))
            )
            .catch(err => next(`Error: ${err}`));
        });

// router
//     .route('/new')
//     .get( (req, res, next) =>
//         Trip.findById(req.params.tripId)
//             .then(trip => res.json(trip))
//             .catch(err => next(`Error: ${err}`))
//     )

router
    .route('/:daysEventId')
    .get((req, res, next) => {
        const id = req.params.daysEventId;
        DaysEvent.findById(id)
            .populate('trip')
            .then(daysEvent => res.json(daysEvent))
            .catch(err => next(`Error: ${err}`))
    })
    .patch( (req, res, next) => 
        DaysEvent.findByIdAndUpdate(req.params.daysEventId)
            .then(() => res.json('Event Updated'))
            .catch(err => next(`Error: ${err}`))
        )
    .delete( (req, res, next) => {
        DaysEvent.findByIdAndRemove(req.params.daysEventId)
            .then(() => res.json('Event Deleted'))
            .catch(err => next(`Error: ${err}`))
    });

// router
//     .route('/:daysEventId/edit')
//     .get( (req, res, next) =>
//         DaysEvent.findById(req.params.daysEventId)
//             .populate('trip')
//             .then(daysEvent => res.json(daysEvent))
//             .catch(err => next(`Error: ${err}`))
//     )


module.exports = router;