const router = require("express").Router();
const tripRoutes = require("./trips");
const daysEventRoutes = require('./daysEvent');
const userRoutes = require("./users");
const authRoutes = require("./auth");
const commentsRoutes = require('./comments');

// Trip routes
router.use("/trips", tripRoutes);

// User routes
router.use("/users", userRoutes);

// Auth routes
router.use("/auth", authRoutes);

// Comment Routes
router.use("/comments", commentsRoutes);

module.exports = router;
