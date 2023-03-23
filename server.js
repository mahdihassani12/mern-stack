const express = require("express");
const app = express();

// Connection to database
const connectDB = require("./db");
connectDB();

app.get("/", (req, res) => {
    res.send("This is our server");
});

app.listen(5000, () => {
    console.log("App is listening to port 5000");
});