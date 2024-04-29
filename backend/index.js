const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

//imports
const nodeRouter = require("./routers/nodeRouter");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(nodeRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
