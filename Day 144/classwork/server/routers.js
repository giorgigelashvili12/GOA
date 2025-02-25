const express = require('express');
const router = express.Router();

const User = require('./user.js');

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.status(500).json({
            err: err.message,
            time: new Date()
        });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { user } = req.body;
        if (!user) {
            return res.status(400).json({
                message: "usee required >:/",
                time: new Date(),
            });
        }

        const duplicates = await User.findOne({ name: user });
        if (duplicates) {
            return res.status(400).json({
                message: "user ezists bro",
                time: new Date(),
            });
        }

        const newUser = await User.create({ name: user });
        res.status(201).json({ data: newUser, status: true });
    } catch (err) {
        res.status(500).json({
            message: 'server error',
            error: err.message,
            time: new Date(),
        });
    }
});

module.exports = router;