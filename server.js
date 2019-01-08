const express = require("express");
require("dotenv").config();

const routes = require("./api/route");

const port = process.env.PORT;

const app = express();
routes(app);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
