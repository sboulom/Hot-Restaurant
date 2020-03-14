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

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/input", function(req, res) {
  res.sendFile(path.join(__dirname, "input.html"));
});

app.get("/api/tables:table", function(req, res) {
  let chosen = req.params.table;

  console.log(chosen);
});

//GET tables avail and waitlist

//POST new people on list

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


//testing submit button (kaden)
function submitInfo(){
  console.log("you pressed the button...");
}