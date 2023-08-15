const router = require('express').Router();
const { Traveller } = require('../../models');

// GET request to return all traveller data without the associated trips. (The `/api/travellers` endpoint)
router.get('/', async (req, res) => {
    try {    
        const travellerData = await Traveller.findAll();
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;