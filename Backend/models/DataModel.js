const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  hobbies: { type: String },
});

const DataModel = mongoose.model("Data", dataSchema);

module.exports = DataModel;
