const router = require('express').Router();
const Trip = require('../../models/trip.model');
const auth = require('../../middleware/auth');
//const DaysEvent = require('../../models/daysEvent.model');

//auth param taken out for dev purposes
router
    .route('/')
    .get( (req, res) => {
        Trip.find()
            .sort({startDate: -1})
            .then(trips => res.json(trips))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .post( (req, res) => {
        
        const newTrip = new Trip(req.body);
        

        newTrip.save()
            .then(() => res.json('New trip added!'))
            .catch(err => res.status(400).json(`Error: ${err}`));
    });
router
    .route('/:tripId')
    .get( (req, res) => {
        Trip.findById(req.params.tripId)
            .then(trip => res.json(trip))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .delete( (req, res) => {
        Trip.findByIdAndDelete(req.params.tripId)
            //.then(trip => trip.remove())
            .then(() => res.json('Trip Deleted.'))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .post( (req, res) => {
        Trip.findById(req.params.tripId)
            .then(trip => {
                trip.destination = req.body.destination;
                trip.startDate = Date.parse(req.body.startDate);
                trip.endDate = Date.parse(req.body.endDate);

                trip.save()
                    .then(() => res.json('Trip updated!'))
                    .catch(err => res.status(400).json(`Error: ${err}`))
            });
    });


module.exports = router;