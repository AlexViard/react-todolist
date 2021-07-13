const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./'));

app.use((req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
