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




// router.get('/:id', async (req, res) => {
//     try {
//         const travellerData = await Traveller.findByPk(req.params.id, {
//            include: [{ model: Location, through: Trip, as: 'trips_scheduled' }] 
//         });

//         if (!travellerData) {
//             res.status(404).json({ message: 'No traveller found with this id!' });
//             return;
//         }

//         res.status(200).json(travellerData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;