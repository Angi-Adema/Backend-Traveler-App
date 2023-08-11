const Location = require('./location');
const Traveller = require('./traveller');
const Trips = require('./trips');

Traveller.belongsToMany(Location, {
    through: {
        model: Trips,
    },
    as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
    through: {
        model: Trips,
    },
    as: 'location_travellers'
});

module.exports = { Location, Traveller, Trips };
