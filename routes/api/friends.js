const router = require('express').Router({mergeParams: true});
const Friend = require('../../models/friend.model');
const auth = require('../../middleware/auth');

router
    .route('/')
    .get( (req, res) => {
        Friend.find()
        .then(friends => res.json(friends))
        .catch(err => res.status(422).json(`Error: ${err}`));
    })
    .post( (req, res, next) => {
        const newFriend = new Friend(req.body);

        newFriend.save()
            .then(() => res.json('New friend added!'))
            .catch(err => res.status(422).json(`Error: ${err}`));
      
    });

router
    .route('/:friendId')
        .get( (req, res) => {
            const id = req.params.friendId;
            Friend.findById(id)
            .then(friend => res.json(friend))
            .catch(err => res.status(422).json(`Error: ${err}`));
    })
    .post( (req, res) => {
        Friend.findById(req.params.friendId)
            .then(friend => {
                friend.name = req.body.name;
                friend.description = req.body.description;
                friend.date = Date.parse(req.body.date);

                friend.save()
                    .then(() => res.json('friend updated!'))
                    .catch(err => res.status(422).json(`Error: ${err}`))
            });
    })
    .delete( (req, res) => {
        Friend.findByIdAndDelete(req.params.friendId)
            //.then(friend => friend.remove())
            .then(() => res.json('Event Deleted.'))
            .catch(err => res.status(422).json(`Error: ${err}`));
    });

module.exports = router;