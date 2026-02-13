const router = require("express").Router();
const c = require("../controllers/attendanceController");

router.post("/checkin", c.checkIn);
router.put("/checkout/:id", c.checkOut);
router.get("/", c.getAllAttendance);
router.get("/employee/:empid", c.getByEmployee);
router.delete("/:id", c.deleteAttendance);

module.exports = router;
