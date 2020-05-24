const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("dotenv").config();
const password = process.env.server_password;
const connectionString =
  "mongodb+srv://admin:" +
  password +
  "@imgexdb-1ruqi.mongodb.net/test?retryWrites=true&w=majority";
const cors = require("cors");

mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("connected to database");
  }
);

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("server is running");
});

const verifyToken = require("./middleware/verifyToken");
app.get("/", verifyToken, (req, res) => {
  res.send(req.user);
});

app.use("/auth", require("./routes/authentication"));
app.use("/photos", require("./routes/photoRoutes"));
