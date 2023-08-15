const Location = require('./location');
const Traveller = require('./traveller');
const Trip = require('./Trip');

Traveller.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'trips_scheduled'
});

Location.belongsToMany(Traveller, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'travellers_locations'
});

module.exports = { Location, Traveller, Trip };
