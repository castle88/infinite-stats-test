const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  gamertag: {
    type: String,
    required: true,
  },
  servicetag: {
    type: String,
    required: true,
  },
  emblem_url: {
    type: String,
    required: true,
  },
  csrs: {
    type: Array,
    required: true,
  },
  serviceRecord: {
    type: Array,
    required: true,
  },
  matchHistory: {
    type: Object,
    required: true,
  },
  loggedIn: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
