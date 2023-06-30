const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/PostRoutes');
const sequelize = require('./database');

const app = express();
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);

sequelize
.sync()
.then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
})
.catch((error) => {
    console.log('Error syncing Database:', error);
});