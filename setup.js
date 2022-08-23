const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const db = require("./config/keys").mongoURI;
const port = process.env.PORT || 5000;

//   Do all setup and startup processes here
module.exports = async (cb) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/api/users", require("./routes/api/users"));

  try {
    await connectToDatabase();
    await startAPIListener();
    await cb();
  } catch (err) {
    console.log(err);
  }
};

async function connectToDatabase() {
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => Promise.resolve())
    .catch((err) => Promise.reject(err));
}

async function startAPIListener() {
  if (process.argv[2] !== "dev") {
    console.log("Launching in Production Mode");
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
  } else {
    console.log("Lanching in Development Mode");
  }

  app.listen(port, () => Promise.resolve());
}
