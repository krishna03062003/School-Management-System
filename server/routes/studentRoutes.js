import express from "express";

import {
  addStudent,
  getStudents,
  getStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", addStudent);
router.get("/", getStudents);
router.get("/:id", getStudent);
router.delete("/:id", deleteStudent);

export default router;