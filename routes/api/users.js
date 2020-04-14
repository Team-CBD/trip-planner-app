const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/user.model');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');


router.route('/login').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/register').post((req, res) => {
    const { fName, lName, email, password } = req.body;

    const newUser = new User({
        fName,
        lName,
        email,
        password
    });

    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;

            newUser.save()
                .then(user => {

                    jwt.sign(
                        { id:user.id },
                        config.get('jwtSecret'),
                        (err, token) => {
                            if(err) throw err
                            res.json({
                                user: {
                                    token,
                                    id: user.id,
                                    fName: user.fName,
                                    email: user.email
                            }
                            })
                        }
                    )
                    
                })
                .catch(err => res.status(400).json(`Error: ${err}`));
        });
    });

    
});
// // commented out for testing purposes
// router.route('/user').get(auth, (req, res) =>{
//     User.findById(req.user.id)
//         .select('-password')
//         .then(user => res.json(user));
// });

module.exports = router;