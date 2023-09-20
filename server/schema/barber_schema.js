Base = require('./user_schema');
mongoose = require('mongoose');

const BarberSchema = Base.discriminator("Barber", new mongoose.Schema({
    experties: { type: String, required: true },
    image: { type: String, required: false },
    appointments: [{ type: String, ref: 'Appointments', required: true}]
}));

module.exports = mongoose.model('Barber');