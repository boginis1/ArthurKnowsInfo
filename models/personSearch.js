const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSearchSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: String,
  company: String,
  companyURL: String,
  companyDescription: String,
  linkedInHeadline: String,
  linkedInURL: String,
  linkedInDescription: String,
  city: String,
  state: String,
  date: { type: Date, default: Date.now },

  localnews: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "LocalNews"
    }
  ]
});

const PersonSearch = mongoose.model("PersonSearch", personSearchSchema);

module.exports = PersonSearch;
