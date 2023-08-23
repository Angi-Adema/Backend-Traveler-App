const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// POST route to create a new trip.
router.post('/', async (req, res) => {
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE route to delete a trip.


module.exports = router;