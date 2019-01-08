const express = require("express");
const routes = require("./api/route");
require("dotenv").config();

const port = process.env.PORT;

const app = express();
routes(app);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
