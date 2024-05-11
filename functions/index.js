/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const express  = require('express')
const app = express()

const gameRoutes = require('./routes/gameRoutes')
// const slideRoutes = require('./routes/gameRoutes')

app.use(express.json())
app.use('/games',gameRoutes)
// app.use('/slides',slideRoutes)

exports.firebaseApp = onRequest(app);
