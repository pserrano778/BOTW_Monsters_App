const express = require('express')
const cors = require('cors');


const app = express()

// configure the app to to use json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

const port = 4000

app.post('/addMonster', (req, res) => {
    console.log('Got body:', req.body);

    const newMonster = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        locations: req.body.locations.split(","),
        drops: req.body.drops.split(",")
    }   
    console.log(newMonster)
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    console.log('Root');
    res.sendStatus(200);
});

app.listen(port, () => {
    
})