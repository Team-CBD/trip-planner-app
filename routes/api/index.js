const router = require("express").Router();
const tripRoutes = require("./trips");
const daysEventRoutes = require('./daysEvent');
const userRoutes = require("./users");
const authRoutes = require("./auth");
const commentsRoutes = require('./comments');
const friendsRoutes = require("./friends");

// Trip routes
router.use("/trip", tripRoutes);

// Day's Event Routes
router.use("/trip/:tripId/daysEvent", daysEventRoutes);

// User routes
router.use("/users", userRoutes);

// Auth routes
router.use("/auth", authRoutes);

// Friends routes
router.use("/friends", friendsRoutes);

// Comments Routes
router.use("/comments", commentsRoutes);

//Global Error handler
router.use((err, req, res, next) =>
    res.status(err.status || 500).render('error', {
        message: err.message || 'Something went wrong!',
        title: err.title || 'Internal Server Error'
    })
);

module.exports = router;
