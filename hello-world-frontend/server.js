const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'hello-world-frontend')));

// Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'hello-world-frontend', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Frontend server running at http://localhost:${port}`);
});
