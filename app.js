const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Test app');
});


app.listen(3000);
