const express = require('express');
const upload = express.Router();

upload.get('/upload', (req, res) => {
    const filePath = path.join(__dirname, 'pubilc', 'index.html');
    console.log("Sending:", filePath); 
    res.status(200).sendFile(filePath, (err) => {
        if (err) {
            console.error("SendFile Error:", err); 
            res.status(err.status || 500).send("File not found!");
        }
    });
});


module.exports = upload;
