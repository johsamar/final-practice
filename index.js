const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = 5000 || process.env.PORT;

app.listen(port, () => console.log('port active', port));

mongoose
  .connect(process.env.DATABASE_STRING_CONNECTION)
  .then()
  .catch((err) => {});
