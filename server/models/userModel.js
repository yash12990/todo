import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      password: true,
      required: true,
    },
    // tasks: {
    //   type: [String],
    //   default: [],
    // },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
// module.exports = User;
