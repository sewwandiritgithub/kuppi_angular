const express = require('express');
const bodyParser = require('body-parser');
const sql = require("mssql");
const server = express();
server.use(bodyParser.json());

// Use body-parser middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Establish the database connection
const dbConfig = {
    user: 'sqlserver',
    password: 'hiruni@12',
    server: '34.121.251.34', 
    database: 'hiruni',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};


// Establish the database connection
sql.connect(dbConfig).then(pool => {
    if(pool.connecting) {
        console.log("Connecting to the database...");
    } else if(pool.connected) {
        console.log("Successfully connected to the database.");
    }
}).catch(error => {
    console.error("Error connecting to the database:", error);
});


// Define a test route
server.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Define a route to get all users (example)
server.get('/user', async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query("SELECT * FROM user");
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Define a route to add a new user (example)
server.post('/user', async (req, res) => {
    const { name, email } = req.body;
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('email', sql.VarChar, email)
            .query("INSERT INTO user (name, email) VALUES (@name, @email)");
        res.status(201).send('User added successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
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