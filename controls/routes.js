const express = require('express');
const router = express.Router();
const Data = require('../config/config')

router.post('/data', async (req, res, next) => {
    try {
        const data = await Data.create(req.body);
        res.json({
            message: "User created successfully",
            data: data
        });
    } catch (error) {
        next(error)
    }
})

router.get('/data', async (req, res, next) => {
    try {
        const data = await Data.find();
        res.status(201).json({
            message: "All data fetched successfully",
            data: data
        });
    } catch (error) {
        next(error);
    }
});

router.get('/data/:id', async (req, res, next) => {
    try {
        const data = await Data.findOne({ id: Number(req.params.id) });
        res.json({
            message: "All data fetched successfully",
            data: data
        });
    } catch (error) {
        next(error);
    }
});


module.exports = router;