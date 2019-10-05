const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes.js");
const port = process.env.PORT || 3333;

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server Up and Running on port ${port}`);
  //console.log(`Server Up and Running on port 3333`);
});
