const Location = require('./location');
const Traveller = require('./traveller');
const Trips = require('./trips');

Traveller.belongsToMany(Location, {
    through: {
        model: Trips,
    },
    as: 'trips_taken'
});

Location.belongsToMany(Traveller, {
    through: {
        model: Trips,
    },
    as: 'locations_visited'
});

module.exports = { Location, Traveller, Trips };
