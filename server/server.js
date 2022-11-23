const express = require("express");
const app = express();
const cors = require("cors");
const participantRoutes = require("./routes/participants");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json({origin: '*'}));

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
