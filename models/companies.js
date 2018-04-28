const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySearchSchema = new Schema({ 
  company: String,
  companyURL: String,
  companyDescription: String,
  
});

const Company = mongoose.model("Company", companySearchSchema);

module.exports = Company;  