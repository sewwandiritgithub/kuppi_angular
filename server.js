const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());

// Use body-parser middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Establish the database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbuser",
});

db.connect(function (error) {
    if (error) {
        console.log("Error connecting to DB:", error);
    } else {
        console.log("Successfully connected to DB");
    }
});


// Define a test route
server.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Define a route to get all users (example)
server.get('/user', (req, res) => {
    const query = "SELECT * FROM user";
    db.query(query, (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(results);
    });
});

// Define a route to add a new user (example)
server.post('/user', (req, res) => {
    const user = req.body;
    const query = "INSERT INTO user (name, email) VALUES (?, ?)";
    db.query(query, [user.name, user.email], (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(201).send('User added successfully');
    });
});

// Start the server on a different port
const PORT = 5003; // Changed from 5000 to 6000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

server.post("/api/user/add", (req, res)=> {
    let details = {
        id: req.body.id,
        Fname: req.body.Fname,
        Password: req.body.Password,
        Email: req.body.Email,
        Phone_number: req.body.Phone_number,
        Address: req.body.Address,
        Role: req.body.Role,
    };
    let sql= "INSERT INTO USER SET ?";
    db.query(sql,details, (error) => {
        if (error) {
            res.send({ status: false, message: "user connected fail"});

        } else {
            res.send({ status: true, message: "user create successfully"});
        }
    });
});

server.get("/api/user", (req, res) => {
    var sql = "SELECT * FROM user";
    db.query(sql, function (error, result) {
        if (error) {
            console.log("Error connection to DB");
        
        } else {
            res.send ({ status: true, data: result });
        }
    });
});

server.get("api/user/:id", (req,res) => {
    var userid = req._construct.params.id;
    var sql = "SELECT * FROM user WHERE id=" + userid;
    db.query(sql, function (error, result) {
        if (error) {
            console.log("Error connecting to DB");

        } else {
            res.send({ status: true, data:result});
        }
    });
});

// update record
server.put("/api/user/update/:id", (req, res) => {
    let sql = 
    "UPDATE user SET Fname='"+
    req.body.Fname +
    "',Password='" +
    req.body.Password +
    "',Email='" +
    req.body.Email +
    "'Phone_number='" +
    req.body.Phone_number +
    "',Address='" +
    req.body.Address +
    "',Role='" +
    req.body.Rple +
    "' WHERE id=" +
    req.params.id;

    let a = db.query(sql, (error, result)=> {
        if (error) {
            res.send({ status: false, message: " user updated failed"});

        } else {
            res.send({ status: true, message: "user updated succesfully" });
        }
    });

});

//delete the records
server.delete("/api/user/delete/:id", (req, res) => {
    let sql = "DELETE FROM user WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
        if (error) {
            res.send({ status: false, message: "user delete failed" });
    
        } else {
            res.send({ status: true, message: " student delete successfully"});
        }
    });
});