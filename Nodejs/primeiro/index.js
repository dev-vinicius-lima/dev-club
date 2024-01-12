const express = require('express');
const app = express();


app.get('/projects', (req, res) => {
    return res.send('Welcome vinicius')
})

app.listen(3000);