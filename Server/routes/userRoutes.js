const {
  register,
  login,
  setAvatar,
  getAllUsers,
  deleteUserProfile,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
router.delete("/deleteuser/:id", deleteUserProfile);

module.exports = router;
