const router = require('express').Router();
const Trip = require('../models/trip.model');

router.route('/').get((req, res) => {
    Trip.find()
        .then(trips => res.json(trips))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const destination = req.body.destination;
    const startDate = Date.parse(req.body.startDate);
    const endDate = Date.parse(req.body.endDate);

    const newTrip = new Trip({
        destination,
        startDate,
        endDate
    });

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

module.exports = router;