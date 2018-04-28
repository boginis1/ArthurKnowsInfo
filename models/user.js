const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Save a reference to the Schema constructor


// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `firstName` must be of type String
  // `firstName` will trim leading and trailing whitespace before it's saved
  // `firstName` is a required field and throws a custom error message if not supplied
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  // `lastName` must be of type String
  // `lastName` will trim leading and trailing whitespace before it's saved
  // `lastName` is a required field and throws a custom error message if not supplied
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  userId: {
    type: String,
    trim: true,
    required: 'User Id is Required'
  },
  // `myCompany` must be of type String
  // `myCompany` will trim leading and trailing whitespace before it's saved
  // `myCompany` is a required field and throws a custom error message if not supplied
  myCompany: {
    type: String,
    trim: true
    // required: "Company is Required"
  },
  // `myTitle` must be of type String
  // `myTitle` will trim leading and trailing whitespace before it's saved
   myTitle: {
    type: String,
    trim: true,
   },

  // `myEmail` must be of type String
  // `myEmail` must be unique
  // `myEmail` must match the regex pattern below and throws a custom error message if it does not
  myEmail: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: 'Please enter an e-mail address'
  },

  // myGender` will trim leading and trailing whitespace before it's saved

  myGender: {
    type: String,
    trim: true
  },
// `date of birth` must be of type Date. The default value is the current date
  myDob: {
    type: Date
  },
  // `billingtier` must be of type String
  // `billingtier` will trim leading and trailing whitespace before it's saved
  billingTier: {
    type: String,
    trim: true,
    default: "Free Trial",
  },
// `sarcasm` must be of type Number
    sarcasm: {
    type: Number,
    default: 0
  },

  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  // `lastUpdated` must be of type Date
  lastUpdated: Date,
  // `fullName` must be of type String
  fullName: String
});
const User = mongoose.model("User", UserSchema);
// Custom Instance Methods

// Custom method `setFullName`
UserSchema.methods.setFullName = function() {
  // Set the current user's `fullName` to their `firstName` and their `lastName` together
  this.fullName = this.firstName + " " + this.lastName;
  // Return the new `fullName`
  return this.fullName;
};

// Custom method `lastUpdatedDate`
UserSchema.methods.lastUpdatedDate = function() {
  // Set the current user's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

// Export the User model
module.exports = User;
