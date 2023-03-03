const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  completed: { type: Boolean, required: true },
});

module.exports = mongoose.model("TodoSchema", TodoSchema);
