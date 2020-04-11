const router = require('express').Router({mergeParams: true});
const DaysEvent = require('../../models/daysEvent.model');
const mongoose = require("mongoose");
const tripRoutes = require("./trips");

router.route('/').get((req, res) => {
    DaysEvent.find()
    .then(trips => res.json(trips))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res, next) => {
    const daysEvent = new DaysEvent({
        _id: new mongoose.Types.ObjectId(),
        selectedDay: req.body.selectedDay,
        event: req.body.event,
        description: req.body.description,
        photo: req.body.photo
    });

    daysEvent
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'New event added',
                createdDaysEvent: {
                    selectedDay: result.selectedDay,
                    event: result.event,
                    description: result.description,
                    photo: result.photo,

                    request : {
                        type: 'GET',
                        url: 'http://localhost:8080/api/daysEvent/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json(`Error ${err}`);
        });
    });

router.route('/:daysEventId').get((req, res) => {
    const id = req.params.daysEventId;
    DaysEvent.findById(id)
});

    //     //const destination = req.body.destination;
//     // const startDate = Date.parse(req.body.startDate);
//     // const endDate = Date.parse(req.body.endDate);
//     const newEvent = new daysEvent(req.body);
//     // const newTrip = new Trip({
//     //     destination,
//     //     startDate,
//     //     endDate
//     // });

// newEvent.save()
//     .then(() => res.json('New event added!'))
//     .catch(err => res.status(400).json(`Error: ${err}`));


// const router = require('express').Router();
// const Trip = require('../../models/trip.model')

// router.route('/trips/:trip_id/daysEvent').get((req, res) => {
//     const trip_id = req.params.trip_id;

//     Trip.findById(trip_id)
//         .select('daysEvent')
//         .then(daysEvent => res.json(daysEvent))
//         .catch(err => res.status(400).json(`Error: ${err}`));
// });



module.exports = router;