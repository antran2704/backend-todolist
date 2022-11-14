const express = require("express");
const app = express();
const db = require("./src/db/index");
const routes = require("./src/routers/index")
const port = process.env.PORT || 3000;
const cors = require('cors');

db.connect();

app.use(express.urlencoded());
app.use(express.json());

app.use(cors());
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
