const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/log', (req, res) => {
    console.log('Received data:', req.body);
    res.json({
        success: true,
        message: 'Data received successfully',
        receivedData: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Server 2 is running on http://localhost:${PORT}`);
}); 