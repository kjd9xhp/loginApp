const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("users", UsersSchema);
