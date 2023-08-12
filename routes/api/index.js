const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travellerRoutes = require('./travellerRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/locations', locationRoutes);
router.use('/travellers', travellerRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;