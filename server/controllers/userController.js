import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ data: users, status: 200 });
  } catch (error) {
    console.log("Error in fetching users", error);
    res.status(500).json({ message: "Error in fetching users" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password);

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists!! Please login." });
    }

    const user = new User({ email, name, password: hashedPassword });
    await user
      .save()
      .then(() =>
        res.status(200).json({ message: "User created successfully!" })
      );
  } catch (error) {
    console.log("Error creating user", error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(202).send({
        message: "No user found! Register as a new user then try again.",
      });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(201).json({ message: "Incorrect password" });
    }

    const { password, ...others } = user._doc;
    res.status(200).json({ user: others, message: "Login successful" });
  } catch (error) {
    console.log("Error in fetching user", error);
    res.status(500).json({ message: "Error in fetching user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password);

    const userToBeUpdated = await User.findOne({ email: id });
    if (!userToBeUpdated) {
      return res.status(404).json({ message: "User not found" });
    }
    // if (
    //   name === userToBeUpdated.name &&
    //   email === userToBeUpdated.email &&
    //   hashedPassword === userToBeUpdated.password
    // ) {
    //   return res.status(400).json({ message: "No changes made" });
    // }
    const newUserData = {
      name: name,
      email: email,
      password: hashedPassword,
    };
    await User.findByIdAndUpdate(userToBeUpdated._id, newUserData);
    res.status(200).json({ message: "User updated successfully" });

    // if (!req.body.name || !req.body.email || !req.body.password) {
    //   return res.status(400).json({ message: "All fields must be filled!!!" });
    // }
    // const { id } = req.params;
    // const updatedUser = await User.findByIdAndUpdate(id, req.body);
    // if (!updatedUser) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    // res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.log("Error updating user", error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleting user", error);
  }
};
