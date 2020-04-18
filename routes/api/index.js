const router = require("express").Router();
const tripRoutes = require("./trips");
const daysEventRoutes = require('./daysEvent');
const userRoutes = require("./users");
const authRoutes = require("./auth");
const commentsRoutes = require('./comments');
const friendsRoutes = require("./friends");

// Auth routes
router.use("/auth", authRoutes);

// User routes
router.use("/users", userRoutes);

// Trip routes
router.use("/trip", tripRoutes);

// Day's Event Routes
router.use("/trip/:tripId/daysEvent", daysEventRoutes);

// Friends routes
router.use("/friends", friendsRoutes);

// Comments Routes
router.use("/comments", commentsRoutes);



module.exports = router;
