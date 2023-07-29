const express = require('express');

const server = express();
const port = 8888;
const path = require('path');

// require in out database functionality
const mongo = require('./db');

// require in client to use with express.static for serving static files
server.use('/', express.static(path.join(__dirname, './client')));


// require in the exported router from poker.js
const search = require('./routes/search.js');
const history = require('./routes/history.js');

// add routes to our express application
// our express app will now handle requests to /poker
server.use('/search', search);

server.use('/history', history);

// start the server
server.listen(port, async () => {
    console.log(`Server is listening on port ${port}`);
    await mongo.connect();
});

// server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });
