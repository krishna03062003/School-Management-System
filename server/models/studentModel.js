import mongoose from "mongoose";

const studentSchema =
  new mongoose.Schema(
    {
      fullName: {
        type: String,
        required: [
          true,
          "Full Name is required",
        ],
        trim: true,
      },

      dateOfBirth: {
        type: String,
        required: [
          true,
          "Date Of Birth is required",
        ],
      },

      gender: {
        type: String,
        required: [
          true,
          "Gender is required",
        ],
      },

      rollNumber: {
        type: String,
        required: [
          true,
          "Roll Number is required",
        ],
        unique: true,
        trim: true,
      },

      admissionNumber: {
        type: String,
        required: [
          true,
          "Admission Number is required",
        ],
        unique: true,
        trim: true,
      },

      admissionYear: {
        type: Number,
        required: [
          true,
          "Admission Year is required",
        ],
      },

      grade: {
        type: String,
        required: [
          true,
          "Grade is required",
        ],
      },

      section: {
        type: String,
        required: [
          true,
          "Section is required",
        ],
      },

      parentName: {
        type: String,
        required: [
          true,
          "Parent Name is required",
        ],
        trim: true,
      },

      relation: {
        type: String,
        required: [
          true,
          "Relation is required",
        ],
      },

      parentPhone: {
        type: String,
        required: [
          true,
          "Parent Phone is required",
        ],
      },

      alternativePhone: {
        type: String,
      },

      parentEmail: {
        type: String,

        validate: {
          validator: function (v) {

            if (!v) return true;

            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
          },

          message:
            "Invalid Email Format",
        },
      },

      address: {
        type: String,
        required: [
          true,
          "Address is required",
        ],
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