const express = require("express");
const app = express();
const cors = require("cors");
const participantRoutes = require("./routes/participants");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

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

// app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

export default function handler(request, response) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}