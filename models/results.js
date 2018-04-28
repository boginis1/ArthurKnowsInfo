const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true },
  company: [{ name: String, lastvalidated: Date, description: String}],
  title: [{ title: String, date: Date}],
  date: { type: Date, default: Date.now }
});

const result = mongoose.model("Result", resultSchema);

module.exports = Result;
