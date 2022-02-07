const express = require("express");
const homeRoutes = require("./routes/home");
const matchRoutes = require("./routes/match");
const searchRoutes = require("./routes/search");
//const newUserRoutes = require("./routes/newUser");
require("dotenv").config({ path: "./config/.env" });
//const connectDB = require("./config/database");

//connectDB();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRoutes);
app.use("/matches", matchRoutes);
app.use("/search", searchRoutes);
// app.use("/newuser", newUserRoutes);

app.listen(port, () => console.log(`listening on port: ${port}`));
