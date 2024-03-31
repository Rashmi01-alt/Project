const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.post("/data", dataController.addData);
router.get("/data", dataController.getAllData);
router.put("/data/:id", dataController.updateData);
router.delete("/data/:id", dataController.deleteData);
router.post("/send-email", dataController.sendEmail);

module.exports = router;
