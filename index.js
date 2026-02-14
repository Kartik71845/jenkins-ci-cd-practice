const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://mongo:27017/testdb')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/hello', (req, res) => {
    res.json({ message: "Hello from Docker Compose + Node.js!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));