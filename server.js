var express = require("express");
var routes = require("./api/routes");

var port = process.env.PORT || 3000;

var app = express();
routes(app);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
