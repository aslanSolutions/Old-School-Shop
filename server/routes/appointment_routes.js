const express = require('express');
const router = express.Router();
const controller = require('../controller/appointment_controller.js');

router.get('/', async (req, res) => {
    controller.getAllAppointment(req, res);
});

router.post('/', async (req, res) => {
    controller.createAppointment(req, res);
});

router.put('/:confNumber', async (req, res) => {
    controller.updateAppointment(req, res, req.params.confNumber);
});

module.exports = router;
