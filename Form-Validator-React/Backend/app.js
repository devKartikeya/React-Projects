const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());    

app.post('/submit', (req, res) => {
    const { username, email, password } = req.body;
    console.log('Received data:', { username, email, password });
    res.json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});