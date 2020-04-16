const router = require("express").Router();
const tripRoutes = require("./trips");
const daysEventRoutes = require('./daysEvent');
const userRoutes = require("./users");
const authRoutes = require("./auth");
const commentsRoutes = require('./comments');
const friendsRoutes = require("./friends");

// Trip routes
router.use("/trips", tripRoutes);

// Day's Event Routes
router.use("/daysEvent", daysEventRoutes);

// User routes
router.use("/users", userRoutes);

// Auth routes
router.use("/auth", authRoutes);

// Friends routes
router.use("/friends", friendsRoutes);

// Comments Routes
router.use("/comments", commentsRoutes);

module.exports = router;
