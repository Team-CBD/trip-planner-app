const router = require('express').Router({mergeParams: true});
const Friend = require('../../models/friend.model');
const mongoose = require("mongoose");
//const friendRoutes = require("./friends");

router.route('/').get((req, res) => {
    Friend.find()
    .then(friends => res.json(friends))
    .catch(err => res.status(422).json(`Error: ${err}`));
});

router.route('/').post((req, res, next) => {
    const newFriend = new Friend(req.body);

    newFriend.save()
        .then(() => res.json('New friend added!'))
        .catch(err => res.status(422).json(`Error: ${err}`));
      
    });

router.route('/:friendId').get((req, res) => {
    const id = req.params.friendId;
    Friend.findById(id)
    .then(friend => res.json(friend))
    .catch(err => res.status(422).json(`Error: ${err}`));
});

router.route('/update/:friendId').post( (req, res) => {
    Friend.findById(req.params.friendId)
        .then(friend => {
            friend.name = req.body.name;
            friend.description = req.body.description;
            friend.date = Date.parse(req.body.date);

            friend.save()
                .then(() => res.json('friend updated!'))
                .catch(err => res.status(422).json(`Error: ${err}`))
        });
});

router.route('/:friendId').delete( (req, res) => {
    Friend.findByIdAndDelete(req.params.friendId)
        //.then(friend => friend.remove())
        .then(() => res.json('Event Deleted.'))
        .catch(err => res.status(422).json(`Error: ${err}`));
});




    //     //const destination = req.body.destination;
//     // const startDate = Date.parse(req.body.startDate);
//     // const endDate = Date.parse(req.body.endDate);
//     const newEvent = new friend(req.body);
//     // const newfriend = new friend({
//     //     destination,
//     //     startDate,
//     //     endDate
//     // });

// newEvent.save()
//     .then(() => res.json('New friend added!'))
//     .catch(err => res.status(422).json(`Error: ${err}`));


// const router = require('express').Router();
// const friend = require('../../models/friend.model')

// router.route('/friends/:friend_id/friend').get((req, res) => {
//     const friend_id = req.params.friend_id;

//     friend.findById(friend_id)
//         .select('friend')
//         .then(friend => res.json(friend))
//         .catch(err => res.status(422).json(`Error: ${err}`));
// });



module.exports = router;