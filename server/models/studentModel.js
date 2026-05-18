import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  age: Number,
});

export default mongoose.model("Student", studentSchema);