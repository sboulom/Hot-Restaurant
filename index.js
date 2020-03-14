const express = require("express");
const path = require("path");

//PORT
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DATA

let tables = [
  {
    tableNumber: "1"
  },
  {
    tableNumber: "2"
  },
  {
    tableNumber: "3"
  }
];
// Routes to html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//Route to API

//GET tables avail and waitlist

//POST new people on list

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
