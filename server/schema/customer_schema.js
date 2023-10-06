const Base = require('./user_schema');
mongoose = require('mongoose');

const Customer = Base.discriminator('Customer', new mongoose.Schema({
    appointments: [{ type: String, ref: 'Appointments', required: false }]
}));

module.exports = mongoose.model('Customer');