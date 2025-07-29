// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello, Node.js API is runnng!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})