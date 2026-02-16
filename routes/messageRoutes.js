const express = require("express")
const router = express.Router();
const messageController = require("../controllers/messageController");


router.post("/createMsg", messageController.createMessage);
router.get("/listMsg", messageController.listMessage);
router.delete("/delete/:id", messageController.deleteMessage);

module.exports = router;