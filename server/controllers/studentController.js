import Student from "../models/studentModel.js";


// Add Student
export const addStudent =
  async (req, res) => {

    try {

      // Check Roll Number
      const existingRoll =
        await Student.findOne({
          rollNumber:
            req.body.rollNumber,
        });

      if (existingRoll) {

        return res
          .status(400)
          .json({
            success: false,
            message:
              "Roll Number already exists",
          });
      }

      // Check Admission Number
      const existingAdmission =
        await Student.findOne({
          admissionNumber:
            req.body.admissionNumber,
        });

      if (
        existingAdmission
      ) {

        return res
          .status(400)
          .json({
            success: false,
            message:
              "Admission Number already exists",
          });
      }

      // Create Student
      const student =
        await Student.create(
          req.body
        );

      res.status(201).json({
        success: true,
        message:
          "Student Added Successfully",
        student,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// Get All Students
export const getStudents =
  async (req, res) => {

    try {

      const {
        grade,
        section,
        gender,
        year,
        search,
      } = req.query;

      let query = {};

      // Grade Filter
      if (grade) {

        query.grade =
          grade;
      }

      // Section Filter
      if (section) {

        query.section =
          section;
      }

      // Gender Filter
      if (gender) {

        query.gender =
          gender;
      }

      // Admission Year Filter
      if (year) {

        query.admissionYear =
          Number(year);
      }

      // Search Filter
      if (search) {

        query.$or = [
          {
            fullName: {
              $regex:
                search,
              $options:
                "i",
            },
          },

          {
            rollNumber: {
              $regex:
                search,
              $options:
                "i",
            },
          },

          {
            admissionNumber:
              {
                $regex:
                  search,
                $options:
                  "i",
              },
          },
        ];
      }

      const students =
        await Student.find(
          query
        ).sort({
          createdAt: -1,
        });

      res.status(200).json({
        success: true,
        total:
          students.length,
        students,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// Get Single Student
export const getStudent =
  async (req, res) => {

    try {

      const student =
        await Student.findById(
          req.params.id
        );

      if (!student) {

        return res
          .status(404)
          .json({
            success: false,
            message:
              "Student Not Found",
          });
      }

      res.status(200).json({
        success: true,
        student,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// Update Student
export const updateStudent =
  async (req, res) => {

    try {

      const student =
        await Student.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            returnDocument:
              "after",
          }
        );

      if (!student) {

        return res
          .status(404)
          .json({
            success: false,
            message:
              "Student Not Found",
          });
      }

      res.status(200).json({
        success: true,
        message:
          "Student Updated Successfully",
        student,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// Delete Student
export const deleteStudent =
  async (req, res) => {

    try {

      const student =
        await Student.findByIdAndDelete(
          req.params.id
        );

      if (!student) {

        return res
          .status(404)
          .json({
            success: false,
            message:
              "Student Not Found",
          });
      }

      res.status(200).json({
        success: true,
        message:
          "Student Deleted Successfully",
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };