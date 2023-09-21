const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Required"],
    },
    email: {
      type: String,
      required: [true, "Email Field Is Required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone Number Is Required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
