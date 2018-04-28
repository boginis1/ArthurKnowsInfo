var mongoose = require("mongoose");
const findOrCreate = require('mongoose-find-or-create');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var LocalNewsSchema = new Schema({
  // `title` must be of type String
  name: String,
  // `body` must be of type String
  url: String,
  displayUrl: String,
  snippet: String,
  dataLastCrawled: String, 
  // person: [
  //   {
  //     // Store ObjectIds in the array
  //     type: Schema.Types.ObjectId,
  //     // The ObjectIds will refer to the ids in the Note model
  //     ref: "PersonSearch"
  //   }
  // ]

});

LocalNewsSchema.plugin(findOrCreate)

// This creates our model from the above schema, using mongoose's model method
var LocalNews = mongoose.model("LocalNews", LocalNewsSchema);

// Export the Note model
module.exports = LocalNews;