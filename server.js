const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./api/routes.js");

const app = express();

// body parser set up
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes set up
app.use('/api/tasks', routes);

// server port set up
const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));