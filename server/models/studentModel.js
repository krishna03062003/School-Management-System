import mongoose from "mongoose";

const studentSchema =
  new mongoose.Schema(
    {
      fullName: {
        type: String,
        required: true,
      },

      dateOfBirth: {
        type: String,
        required: true,
      },

      gender: {
        type: String,
        required: true,
      },

      rollNumber: {
        type: String,
        required: true,
        unique: true,
      },

      admissionNumber: {
        type: String,
        required: true,
        unique: true,
      },

      admissionYear: {
        type: Number,
        required: true,
      },

      grade: {
        type: String,
        required: true,
      },

      section: {
        type: String,
        required: true,
      },

      parentName: {
        type: String,
        required: true,
      },

      relation: {
        type: String,
        required: true,
      },

      parentPhone: {
        type: String,
        required: true,
      },

      alternativePhone: {
        type: String,
      },

      parentEmail: {
        type: String,
      },

      address: {
        type: String,
        required: true,
      },

      attendance: {
        type: Number,
        default: 94,
      },

      gpa: {
        type: Number,
        default: 3.8,
      },

      image: {
        type: String,
        default:
          "https://i.pravatar.cc/300",
      },
    },
    {
      timestamps: true,
    }
  );

const Student =
  mongoose.model(
    "Student",
    studentSchema
  );

export default Student;