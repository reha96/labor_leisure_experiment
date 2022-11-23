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

<<<<<<< HEAD
// app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
=======
// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//   });
//   console.log(`Server is running on port: ${port}`);
// });
>>>>>>> parent of 6ab97c6 (get & post test again)
