const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { notFoundHandler, badRequestHandle } = require('./controls/errorHandler');
const router = require('./controls/routes');
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();


app.use(express.json());
app.use(cors());


mongoose.connect(process.env.DB_URL)
.then(()=> console.log('database connect successfully'))
.catch((err)=>console.log(err))

app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Request send successfully');
});


app.use(notFoundHandler);
app.use(badRequestHandle);

app.listen(port, () => {
    console.log(`${port}`);
})

