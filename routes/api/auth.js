const router = require('express').Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/user.model');

router.route('/').post((req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({msg: 'User does not exist'});

            // Validate password
            bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials'});

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
                );
            });
        });
    
        // Validate password
        

    
});

module.exports = router;