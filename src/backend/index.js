require('dotenv').config()
import {MongoClient} from "mongodb";
const express = require('express')
const app = express()
const mongoose = require('mongoose')

MongoClient.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.listen(3000, () => console.log('server started'))