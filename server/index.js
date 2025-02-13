const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use("/", (req, res) => {
    res.send("just believe in urself and keep ur head high u can do this ");
});

app.listen(5000, () => {
    console.log("server is running in 5000");
});