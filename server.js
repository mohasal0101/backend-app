"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const { notFound } = require("./errorHandlers/404");
const userRoutes = require("./routes/usersRoute");
const dealRoutes = require("./routes/dealsRoute");
const claimedRoutes = require("./routes/claimedRoute");



app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(dealRoutes);
app.use(claimedRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

app.use("*", notFound);

function start(port) {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}

module.exports = {
    app,
    start
};

