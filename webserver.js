const express = require('express');
const app = express();

const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

// Handle requests to http://localhost:5000
app.get('/', (req, res) => {
    res.json(motoGP);
});

// Handle requests to http://localhost:5000/country
app.get('/country', (req, res) => {
    const countries = {};
    motoGP.forEach((race) => {
        const country = race.winner.country;
        if (!countries[country]) {
            countries[country] = [];
        }
        countries[country].push(race);
    });
    res.json(countries);
});

// Handle requests to http://localhost:5000/name
app.get('/name', (req, res) => {
    const winners = {};
    motoGP.forEach((race) => {
        const name = `${race.winner.firstName} ${race.winner.lastName}`;
        if (!winners[name]) {
            winners[name] = [];
        }
        winners[name].push(race);
    });
    res.json(winners);
});

// Handle all other requests
app.all('*', (req, res) => {
    res.status(400).send("Bad Request");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});