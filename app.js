const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const items = require('./data/items.json');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to send JSON data
app.get('/api/items', (req, res) => {
    res.json(items);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
