// const router = require('express').Router({mergeParams: true});
// const DaysEvent = require('../models/daysEvent.model');

// router.route('/').get((req, res) => {
//     DaysEvent.find()
//     .then(trips => rest.json(trips))
//     .catch(err => rest.status(400).json(`Error: ${err}`));
// });

// module.exports = router;

const router = require('express').Router();
const Trip = require('../models/trip.model')

router.route('/trips/:trip_id/daysEvent').get((req, res) => {
    const trip_id = req.params.trip_id;

    Trip.findById(trip_id)
        .select('daysEvent')
        .then(daysEvent => res.json(daysEvent))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;