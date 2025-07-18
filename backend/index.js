// backend/index.js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/tasks', (req, res) => {
  res.json([{ id: 1, title: 'Sample Task' }]);
});

app.listen(5000, () => console.log('API running on port 5000'));

