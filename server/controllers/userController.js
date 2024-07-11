import { User } from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ data: users, status: 200 });
  } catch (error) {
    console.log("Error in fetching users", error);
    res.status(500).json({ message: "Error in fetching users" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if(!user) return res.status(404).json({ message: "No such user" });

    res.status(200).json({
      data: user,
      status: 200,
    });
  } catch (error) {
    console.log("Error in fetching user", error);
    res.status(500).json({ message: "Error in fetching user" });
  }
};

export const createUser = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    const user = await User.create(newUser);
    res.status(201).json(user);
  } catch (error) {
    console.log("Error creating user", error);
  }
};

export const updateUser = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: "All fields must be filled!!!" });
    }

    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.log("Error updating user", error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export const deleteUser = async(req, res) => {
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

// export const addTask = async(req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedUser = await User.findByIdAndUpdate(id, {
//       $push: { tasks: req.body.task },
//     });

//     res.status(200).json({ message: "Task added successfully!" });
    
//   } catch (error) {
//     console.log("Error adding task", error);
//     res.status(500).json({ message: "Error adding task" });
//   }
// };