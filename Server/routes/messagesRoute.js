const {
  addMessage,
  getAllMessage,
  deleteMessage,
} = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addmsg/:id", addMessage);
router.post("/getmsg/:id", getAllMessage);
router.delete("/deletemsg/:id", deleteMessage);

module.exports = router;
