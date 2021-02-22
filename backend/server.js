const express = require('express');
const search = require('./routes/search.js');

const app = express();

//routes
app.use('/api', search);

app.listen(3001, console.log('Server running on port 3001'));
