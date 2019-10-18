const functions = require('firebase-functions');

const express = require('express');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// // We are exporting a function to be run on the cloud
// // But we could use express.js to define a single app with 
// //multiple routes (endpoint)
// exports.helloWorld = functions.https.onRequest((request, response) => {

//     const name = request.query.name;

//     response.send(`hello ${name}`);
// });


const app = express();

app.get('hello',(request, response) => {
response.send('cat');
});


exports.api = functions.https.onRequest(app);