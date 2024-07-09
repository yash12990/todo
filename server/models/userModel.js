import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      password: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
