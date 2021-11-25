const express = require('express')
const app = express()
const port = 4000

app.post('/addMonster', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    
})