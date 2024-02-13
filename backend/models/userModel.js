const mongoose = require("mongoose");

//Create Schema
const userDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

//Create Model
const userdata = mongoose.model("userdata", userDataSchema);
// const user = mongoose.model("user", userDataSchema);

module.exports = userdata;
// module.exports = user;