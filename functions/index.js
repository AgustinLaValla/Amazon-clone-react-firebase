const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');

config();

//Stripe instance
const stripe = require('stripe')(process.env.SECRET_KEY);

//API config
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));


//API Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log(total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(total), //subunits of the currency
        currency: 'usd'
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

//Listen Commands
exports.api = functions.https.onRequest(app);
