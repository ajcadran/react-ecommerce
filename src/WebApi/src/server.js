const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define a route to serve individual images
app.get('/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(__dirname, 'images', imageName));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});