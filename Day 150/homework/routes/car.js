const express = require('express');
const router = express.Router();
const car = require('../models/car.schema');

router.get('/', async (req, res) => {
    try {
        const load = await car.find();
        res.json(load);
    } catch(e) {
        console.error('Error fetching cars');
        res.status(500).json({err: 'Internal Server Error', data: e});
    }
});

module.exports = router;