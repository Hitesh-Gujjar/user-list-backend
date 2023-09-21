//@desc get all users
// route GET @/app/login

const authModel = require("../models/authModel");

//access public
const authLogin = async (req, res) => {
  res.json("hello word");
};

//@desc get all users
// route GET @/app/users
//access public
const singUp = async (req, res) => {
  const { name, phone, email, password } = req.body;
  if (!name || !phone || !email || !password) {
    throw new Error("All fields are required");
  }
  console.log("....123", name, phone, email, password);
  
  const createUser = await authModel({
    name,
    phone,
    email,
    password,
  });

  res.status(200).json(createUser);
};

module.exports = { authLogin, singUp };
