const express = require("express");
const app = express();
const cors = require("cors");
const participantRoutes = require("./routes/participants");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
// const dbo = require("./db/conn");
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("connected to db and listening to port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/participants", participantRoutes);

// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//   });
//   console.log(`Server is running on port: ${port}`);
// });
