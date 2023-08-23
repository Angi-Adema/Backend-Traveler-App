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
router.delete('/:id', async (req, res) => {
    try {
        const tripData = await Trip.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!tripData) {
            res.status(404).json({ message: 'No trip found with this id!' });
            return;
        }
        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;