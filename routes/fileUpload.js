const express = require('express');
const path = require('path');
const upload = express.Router();

upload.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pubilc', 'index.html'));
});

module.exports = upload;
