//Load express
const express = require('express');
// Load Controller
const SequenceController = require('../app/controllers/SequenceController');
//const auth = require('../app/middlewares/AuthMiddleware');
const sequence = new SequenceController;
// Call the router
const api = express.Router();


api.post('/sequences', sequence.getSequences);
api.get('/sequence', sequence.getSequence);
// Export the configuration
module.exports = api;