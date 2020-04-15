const router = require('express').Router({mergeParams: true});
const DaysEvent = require('../../models/daysEvent.model');
const mongoose = require("mongoose");
//const eventRoutes = require("./events");

router.route('/').get((req, res) => {
    DaysEvent.find()
    .then(events => res.json(events))
    .catch(err => res.status(422).json(`Error: ${err}`));
});

router.route('/').post((req, res, next) => {
    const newDaysEvent = new DaysEvent(req.body);

    newDaysEvent.save()
        .then(() => res.json('New event added!'))
        .catch(err => res.status(422).json(`Error: ${err}`));
      
    });

router.route('/:daysEventId').get((req, res) => {
    const id = req.params.daysEventId;
    DaysEvent.findById(id)
    .then(event => res.json(event))
    .catch(err => res.status(422).json(`Error: ${err}`));
});

router.route('/update/:eventId').post( (req, res) => {
    DaysEvent.findById(req.params.eventId)
        .then(event => {
            event.name = req.body.name;
            event.description = req.body.description;
            event.date = Date.parse(req.body.date);

            event.save()
                .then(() => res.json('event updated!'))
                .catch(err => res.status(422).json(`Error: ${err}`))
        });
});

router.route('/:eventId').delete( (req, res) => {
    DaysEvent.findByIdAndDelete(req.params.eventId)
        //.then(daysEvent => daysEvent.remove())
        .then(() => res.json('Event Deleted.'))
        .catch(err => res.status(422).json(`Error: ${err}`));
});




    //     //const destination = req.body.destination;
//     // const startDate = Date.parse(req.body.startDate);
//     // const endDate = Date.parse(req.body.endDate);
//     const newEvent = new daysEvent(req.body);
//     // const newevent = new event({
//     //     destination,
//     //     startDate,
//     //     endDate
//     // });

// newEvent.save()
//     .then(() => res.json('New event added!'))
//     .catch(err => res.status(422).json(`Error: ${err}`));


// const router = require('express').Router();
// const event = require('../../models/event.model')

// router.route('/events/:event_id/daysEvent').get((req, res) => {
//     const event_id = req.params.event_id;

//     event.findById(event_id)
//         .select('daysEvent')
//         .then(daysEvent => res.json(daysEvent))
//         .catch(err => res.status(422).json(`Error: ${err}`));
// });



module.exports = router;