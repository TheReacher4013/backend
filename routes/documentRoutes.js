const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const c = require("../controllers/documentController");

router.post("/", upload.single("file"), c.uploadDocument);
router.get("/", c.getAllDocuments);
router.get("/employee/:empid", c.getByEmployee);
router.delete("/:id", c.deleteDocument);

module.exports = router;
