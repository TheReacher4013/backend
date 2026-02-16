const express = require("express")
const router = express.Router();
const noticeController = require("../controllers/noticeController");

router.post("/create", noticeController.createNotice);
router.get("/listNotice", noticeController.listNotices);
router.delete("/delete/:id", noticeController.deleteNotice);

module.exports = router;