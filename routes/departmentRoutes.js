const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departmentController");

router.post("/CreateDep", departmentController.createDepartment);
router.get("/listDep", departmentController.listDepartments);
router.delete("/delete/:id", departmentController.deleteDepartment)

module.exports = router;