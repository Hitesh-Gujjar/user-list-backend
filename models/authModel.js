const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is require"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email is unique"],
    },
    phone: {
      type: Number,
      required: [true, "phone number is required"],
      unique: [true, "this number is already exist"],
    },
    password: {
      type: String,
      required: [true, "Password Field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("usersLogin", authSchema);
