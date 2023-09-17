const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appointmentSchema = new Schema({
    confNumber: { type: String, required: true, unique: true },
    status: {
        type: String,
        required: true,
        enum: ['Scheduled', 'Completed', 'Cancelled']
    },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    services: [{ type: Schema.Types.ObjectId, ref: 'Services', required: false }],
    barber: [{ type: Number, ref: 'Barber', required: false }],

});

const Appointment = mongoose.model("Appointments", appointmentSchema);
module.exports = Appointment;