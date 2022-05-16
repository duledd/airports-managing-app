const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'dule',
    database: 'AirportsDataBase',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/api/get", (req, res) => {
    
    const sqlSelect = "SELECT * FROM airports";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//Get country names for select options
app.get("/api/get_country", (req, res) => {
    
    const sqlSelect = "SELECT * FROM country";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {
    const {airport} = req.body;
    
    const sqlInsert = "INSERT INTO airports (airportName, country, location, associatedAirline) VALUES (?,?,?,?)";
    db.query(sqlInsert, [airport.airportName, airport.country, airport.location, airport.associatedAirline], (err, result) => {
        console.log(result);
    });
});

app.delete("/api/delete/:id", (req, res) => {
    const {id} = req.params;
    const sqlDelete = "DELETE FROM airports WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        };
    });
});

app.get("/api/get/:id", (req, res) => {
    const {id} = req.params;
    const sqlGet = "SELECT * FROM airports where id = ?";
    db.query(sqlGet, id, (err, result) => {
        if (err) {
            console.log(err)
        };
        res.send(result);
    });
});

app.put("/api/update/:id", (req, res) => {
    const {id} = req.params;
    const {airport} = req.body;

    const sqlUpdate = "UPDATE `airports` SET `airportName` = ?, `country` = ?, `location` = ?, `associatedAirline` = ? WHERE `id` = ?";
    db.query(sqlUpdate, [airport.airportName, airport.country, airport.location, airport.associatedAirline, id], (err, result) => {
        if (err) {
            console.log(err)
        };
        res.send(result);
    });
});



app.listen(3001, () => {
    console.log("Running on 3001!!!");
})