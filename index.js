const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const dbConnect = require("./utility/DbConnnect");
const toolsRoutes = require("./routes/v1/tools.route");
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.static("route"));
// app.use(viewCount);

dbConnect();

app.use("/api/v1/tools", toolsRoutes);

app.get("/", (req, res) => {
  res.send("Running tools management server");
});

app.all("*", (req, res) => {
  res.send("No route found");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log("listening to port", port);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.massage);
  app.close(() => {
    process.exit(1);
  });
});
