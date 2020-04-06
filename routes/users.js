const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, rest) => {
    User.find()
        .then(users => rest.json(users))
        .catch(err => rest.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const { email, password } = req.body;

    const newUser = new User({
        email,
        password
    });

newUser.save()
    .then(() => res.json('New user added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;