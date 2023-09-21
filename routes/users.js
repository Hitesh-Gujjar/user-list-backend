const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

//BOTH ARE SAME ROUTE SO WE USED SINGLE LINE THIS
// router.route("/").get(getUsers)
// router.route("/").post(createUser);
router.route("/").get(getUsers).post(createUser);

//BOTH ARE THE SAME ROUTE SO WE USED SINGLE LINE THIS
// router.route("/:id").put(updateUser)
// router.route("/:id").delete(deleteUser);

router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
