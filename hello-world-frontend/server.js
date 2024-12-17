const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:8000/api/hello');
    res.send(`<h1>${response.data.message}</h1>`);
  } catch (error) {
    res.status(500).send('Error fetching data from backend');
  }
});

app.listen(port, () => {
  console.log(`Frontend server running at http://localhost:${port}`);
});
