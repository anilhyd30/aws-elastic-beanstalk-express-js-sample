const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('NEW UPDATE DAT 16:32 ??'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
