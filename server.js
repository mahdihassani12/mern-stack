const express = require("express");
const app = express();
const cors = require("cors");

// Connection to database
const connectDB = require("./db");
connectDB();

// middlewares
app.use(cors());
app.use(express.json({ extended: false }));

// API integration
app.use("/api/posts", require("./routes/posts"));

app.get("/", (req, res) => {
    res.send("This is our server");
});

app.listen(5000, () => {
    console.log("App is listening to port 5000");
});