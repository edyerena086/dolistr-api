const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(3000, () => console.log('API listening in port 3000'));