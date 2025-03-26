const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

// Authentication routes
router.post("/signup", patientController.registerPatient);
router.post("/signin", patientController.loginPatient);

// Pharmacy management routes
router.get("/", patientController.getAllPatients);
router.get("/:id", patientController.getPatientById);
router.put("/:id", patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);

// Toggle pharmacy open/close status
router.patch("/:id/toggle-status", patientController.togglePatientStatus);

module.exports = router;
