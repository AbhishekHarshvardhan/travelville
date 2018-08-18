const express = require("express");
const app = express();
const path = require("path");
var compression = require("compression");
// compress all requests
app.use(compression());
app.use(express.static(__dirname + "/"));
console.log(__dirname);
app.listen(process.env.PORT || 3000);
//PathLocationStrategy - which angular application uses for routing
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
console.log("Console listening!");
