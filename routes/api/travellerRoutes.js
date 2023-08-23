const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// GET request to return all traveller data without the associated trips. (The `/api/travellers` endpoint)
router.get('/', async (req, res) => {
    try {    
        const travellerData = await Traveller.findAll();
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET request to return a single traveller.
router.get('/:id', async (req, res) => {
    try {
        const travellerData = await Traveller.findByPk(req.params.id, {
            include: [{ model: Location, through: Trip, as: 'trips_scheduled' }]
        });
        if (!travellerData) {
            res.status(404).json({ message: 'No traveller found with this id!' });
            return;
        }
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST route to create another traveller.
router.post('/', async (req, res) => {
    try {
        const travellerData = await Traveller.create(req.body);
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE route to delete a traveller.
router.delete('/:id', async (req, res) => {
    try {
        const travellerData = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!travellerData) {
            res.status(404).json({ message: 'No traveller found with this id!' });
            return;
        }
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;