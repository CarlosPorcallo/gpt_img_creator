const express = require('express');
const app = express();
require('dotenv').config();

// serve up production assets
app.use(express.static(process.env.BUILD_PATH));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log(`Server listening on port: ${PORT}`);
app.listen(PORT);