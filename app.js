const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGOdb_CONNECTION_STRING)
    .then(() => {
        console.log("Mongodb connected");
    }).catch(error => {
        console.log("error", error);
    })

