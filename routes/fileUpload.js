const express = require('express');
const path = require('path');
const upload = express.Router();
const multer = require('multer');
const Upload = require('../config/fileuploadSchma');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Files will be saved in the 'uploads/' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const uploaded = multer({ storage: storage });

upload.post('/upload', uploaded.single('myImage'), async (req, res) => {
  try {
    const newFile = await Upload.create({
      myImage: req.file.filename   // ✔ correct
    });

    res.json({ newFile });
  } catch (error) {
    console.log(error);
  }
});


upload.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pubilc', 'index.html'));
});

module.exports = upload;
