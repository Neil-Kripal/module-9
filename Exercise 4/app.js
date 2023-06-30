const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const playersRoutes = require('./routes/playersRoutes');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/api/players', playersRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});