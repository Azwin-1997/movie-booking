const mongoose = require("mongoose");

const ownerschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  theatrename: {
    type: String,
  },
});

module.exports = mongoose.model("owner", ownerschema);
