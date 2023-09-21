const userDetails = require("../models/userModel");
//@desc get all users
// route GET @/app/users
//access public
const getUsers = async (req, res) => {
  const users = await userDetails.find();
  res.status(200).json(users);
};

//@desc create new user
//route POST @/app/users
//access public
const createUser = async (req, res) => {
  const { name, email, phone } = req.body;
console.log(" name, email, phone ", name, email, phone )
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fiels are required");
  }

  const users = await userDetails.create({
    name,
    email,
    phone,
  });

  res.status(200).json(users);
};

//@desc update user
//route PUT @/app/users
//access public
const updateUser = async (req, res) => {
  res.status(200).json({ message: "update user" });
};

//@desc delete user
//route DELETE @/app/users
//access public
const deleteUser = async (req, res) => {
  res.status(200).json({ message: "delete user" });
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
