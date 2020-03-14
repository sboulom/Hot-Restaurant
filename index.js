const express = require("express");
const path = require("path");


//PORT
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DATA

let waitlist = []

let tables =
[
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
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/input", function (req, res) {
    res.sendFile(path.join(__dirname, "input.html"));
});

app.get("/api/tables", function (req, res) {
    let chosen = req.params.table;

    console.log(chosen);



    //   for (let index = 0; index < tables.length; index++) {
    //     if (chosen === tables[i].tableNumber){
    //         return res.json (tables[i]);
    //     }
    //     return res.json(false);
    // }

});

app.get("/api/waitlist", function (req, res) {
    res.json(
        {
            firstName: "Steven",
            customerEmail: "njaquez@yahoo.com",
            cusomterID: "101",
            phoneUnumer: "3239799318",
        })

})

app.post("/api/tables", function(req, res){

    
    const newList = req.body
    if (tables.length < 5){
        tables.push(newList)
        res.json("you're booked")
    } else {
        waitlist.push(newList);
        res.json("You're on the waitlist")
    } 

    

    res.json("");
})





//POST new people on list

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
