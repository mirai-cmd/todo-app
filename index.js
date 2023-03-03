const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/TodoRoutes");
const port = process.env.PORT || 5000;


app.use(express.json());
dotenv.config();
app.use("/api/todos", todoRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
