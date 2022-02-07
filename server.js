const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/home");
const matchRoutes = require("./routes/match");
const searchRoutes = require("./routes/search");
const cors = require("cors");
//const newUserRoutes = require("./routes/newUser");
require("dotenv").config({ path: "./config/.env" });
//const connectDB = require("./config/database");

//connectDB();

const port = process.env.PORT || 3333;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./Frontend/build")));
app.use(cors());

app.use("/api/", homeRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/search", searchRoutes);
// app.use("/newuser", newUserRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./Frontend/build", "index.html"));
});

app.listen(port, () => console.log(`listening on port: ${port}`));
