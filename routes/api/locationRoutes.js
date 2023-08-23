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

// GET route to return a single location.
router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id, {
            include: [{ model: Traveller, through: Trip, as: 'travellers_locations' }]
        });
        
        if (!locationData) {
            res.status(404).json({ message: 'No location found with this id!' });
            return;
        }
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST route to create a new location.
router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create(req.body);
        res.status(200).json(locationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;