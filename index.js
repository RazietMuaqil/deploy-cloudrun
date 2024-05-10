const package = require('./package.json')
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(`${package.name} received a request.`);
  res.send(`Hallo, ini dari branch Main`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`${package.name} listening on port: ${port}`);
});
