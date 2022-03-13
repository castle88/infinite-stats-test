const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const homeRoutes = require("./routes/home");
const matchRoutes = require("./routes/match");
const searchRoutes = require("./routes/search");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/database");
const protect = require("./middleware/protectRoutes");

// look into polypane - multiple browser window

connectDB();

const port = process.env.PORT || 3333;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./Frontend/build")));
app.use(cors());
app.use(helmet());

app.use("/api/auth", authRoutes);
app.use("/api", protect, homeRoutes);
app.use("/api/matches", protect, matchRoutes);
app.use("/api/search", protect, searchRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./Frontend/build", "index.html"));
// });chi

app.listen(port, () => console.log(`listening on port: ${port}`));
