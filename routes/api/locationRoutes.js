const router = require('express').Router();
const { Location, Trip, Traveller } = require('../../models');

// GET route return all vacation locations.
router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;