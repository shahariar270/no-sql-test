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

router.patch('/data/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const updatedData = req.body

        const updatedUser = await Data.findOneAndUpdate(
            { id: Number(id) },
            updatedData,
            { new: true }
        );

        res.status(200).json({
            massage: 'update data',
            updatedUser
        })
    } catch (error) {
        next(error)
    }

})

router.delete('/data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await Data.findOneAndDelete({ id: Number(id) });

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const data = await Data.find();
        res.status(200).json({
            massage: 'data deleted successfully',
            data: data
        })
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;