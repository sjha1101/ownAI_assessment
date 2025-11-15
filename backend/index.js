const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const PORT = 3000;
const route = require('./route.js');

app.use(express.json());
app.use('/api', route);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});