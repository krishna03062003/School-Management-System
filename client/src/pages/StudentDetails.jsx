import { useEffect, useState } from "react";

import {
  ArrowLeft,
  Bell,
  Mail,
  Phone,
  GraduationCap,
  User,
  MapPin,
  Trash2,
  Pencil,
  Users,
  Calendar,
  Shield,
  BookOpen,
  Sparkles,
  School,
  Save,
  X,
} from "lucide-react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  getStudent,
  deleteStudent,
  updateStudent,
} from "../services/studentService";

const StudentDetails = () => {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [student, setStudent] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [editMode, setEditMode] =
    useState(false);

  // Fetch Student
  const fetchStudent =
    async () => {

      try {

        setLoading(true);

        const res =
          await getStudent(id);

        setStudent(
          res.data.student
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  // Delete Student
  const handleDelete =
    async () => {

      const confirmDelete =
        window.confirm(
          "Delete this student?"
        );

      if (
        !confirmDelete
      )
        return;

      try {

        await deleteStudent(
          id
        );

        alert(
          "Student Deleted Successfully"
        );

        navigate(
          "/students"
        );

      } catch (error) {

        console.log(error);
      }
    };

  // Save Update
  const handleUpdate =
    async () => {

      try {

        await updateStudent(
          id,
          student
        );

        alert(
          "Student Updated Successfully"
        );

        setEditMode(
          false
        );

      } catch (error) {

        console.log(error);
      }
    };

  // Cancel Edit
  const handleCancel =
    () => {

      setEditMode(
        false
      );

      fetchStudent();
    };

  useEffect(() => {

    fetchStudent();

  }, []);

  // Loading
  if (loading) {

    return (

      <div className="min-h-screen bg-[#0B1120] flex justify-center items-center">

        <div className="text-center">

          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="text-white mt-6 text-lg font-semibold">
            Loading Student...
          </p>
        </div>
      </div>
    );
  }

  // Not Found
  if (!student) {

    return (

      <div className="min-h-screen bg-[#0B1120] flex justify-center items-center">

        <div className="bg-white p-10 rounded-[35px] text-center">

          <h1 className="text-4xl font-black text-red-500">
            Student Not Found
          </h1>

          <button
            onClick={() =>
              navigate(
                "/students"
              )
            }
            className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-2xl"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-[#0B1120] p-3 md:p-5 flex justify-center">

      <div className="w-full max-w-[1450px] bg-white rounded-[40px] overflow-hidden border-[3px] border-[#6D5DF6]">

        {/* Header */}
        <div className="flex justify-between items-center px-5 md:px-10 py-5 border-b bg-white">

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                navigate(
                  "/students"
                )
              }
              className="bg-gray-100 hover:bg-gray-200 transition p-3 rounded-full"
            >

              <ArrowLeft
                size={22}
              />
            </button>

            <div>

              <h1 className="text-2xl font-black text-blue-600">
                Student Details
              </h1>

              <p className="text-gray-500 text-sm mt-1">
                School Management System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">

            <div className="bg-gray-100 p-3 rounded-full">

              <Bell
                size={18}
              />
            </div>

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-12 h-12 rounded-full border-2 border-blue-500"
            />
          </div>
        </div>

        {/* Main */}
        <div className="p-5 md:p-10">

          {/* Hero */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-[40px] p-8 md:p-10 text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 opacity-10">

              <School
                size={250}
              />
            </div>

            <div className="relative z-10 flex flex-col xl:flex-row gap-10 items-center">

              {/* Image */}
              <div className="relative">

                <img
                  src={
                    student.image
                  }
                  alt=""
                  className="w-44 h-44 rounded-full border-[6px] border-white object-cover shadow-2xl"
                />

                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-3 rounded-full border-4 border-white">

                  <Sparkles
                    size={20}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center xl:text-left">

                {editMode ? (

                  <input
                    type="text"
                    value={
                      student.fullName
                    }
                    onChange={(e) =>
                      setStudent({
                        ...student,
                        fullName:
                          e.target.value,
                      })
                    }
                    className="w-full bg-white text-black px-6 py-4 rounded-2xl text-3xl font-black"
                  />

                ) : (

                  <h1 className="text-4xl md:text-6xl font-black">
                    {
                      student.fullName
                    }
                  </h1>
                )}

                <p className="text-blue-100 mt-4 text-lg">
                  Student Profile Overview
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-8">

                  {/* Roll */}
                  {
                    editMode ? (

                      <input
                        type="text"
                        value={
                          student.rollNumber
                        }
                        onChange={(e) =>
                          setStudent({
                            ...student,
                            rollNumber:
                              e.target.value,
                          })
                        }
                        className="bg-white text-black px-4 py-3 rounded-full"
                      />

                    ) : (

                      <span className="bg-white/20 px-5 py-3 rounded-full font-semibold">
                        Roll:
                        {" "}
                        {
                          student.rollNumber
                        }
                      </span>
                    )
                  }

                  {/* Grade */}
                  {
                    editMode ? (

                      <input
                        type="text"
                        value={
                          student.grade
                        }
                        onChange={(e) =>
                          setStudent({
                            ...student,
                            grade:
                              e.target.value,
                          })
                        }
                        className="bg-white text-black px-4 py-3 rounded-full"
                      />

                    ) : (

                      <span className="bg-white/20 px-5 py-3 rounded-full font-semibold">
                        {
                          student.grade
                        }
                      </span>
                    )
                  }

                  {/* Section */}
                  {
                    editMode ? (

                      <input
                        type="text"
                        value={
                          student.section
                        }
                        onChange={(e) =>
                          setStudent({
                            ...student,
                            section:
                              e.target.value,
                          })
                        }
                        className="bg-white text-black px-4 py-3 rounded-full"
                      />

                    ) : (

                      <span className="bg-white/20 px-5 py-3 rounded-full font-semibold">
                        Section
                        {" "}
                        {
                          student.section
                        }
                      </span>
                    )
                  }

                  {/* Gender */}
                  {
                    editMode ? (

                      <select
                        value={
                          student.gender
                        }
                        onChange={(e) =>
                          setStudent({
                            ...student,
                            gender:
                              e.target.value,
                          })
                        }
                        className="bg-white text-black px-4 py-3 rounded-full"
                      >
                        <option>
                          Male
                        </option>

                        <option>
                          Female
                        </option>
                      </select>

                    ) : (

                      <span className="bg-white/20 px-5 py-3 rounded-full font-semibold">
                        {
                          student.gender
                        }
                      </span>
                    )
                  }
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center xl:justify-start gap-5 mt-10">

                  {
                    editMode ? (

                      <>
                        <button
                          onClick={
                            handleUpdate
                          }
                          className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
                        >

                          <Save
                            size={18}
                          />

                          Save
                        </button>

                        <button
                          onClick={
                            handleCancel
                          }
                          className="bg-white text-black hover:bg-gray-100 transition px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
                        >

                          <X
                            size={18}
                          />

                          Cancel
                        </button>
                      </>

                    ) : (

                      <button
                        onClick={() =>
                          setEditMode(
                            true
                          )
                        }
                        className="bg-white text-blue-600 hover:bg-gray-100 transition px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
                      >

                        <Pencil
                          size={18}
                        />

                        Edit Student
                      </button>
                    )
                  }

                  <button
                    onClick={
                      handleDelete
                    }
                    className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
                  >

                    <Trash2
                      size={18}
                    />

                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid xl:grid-cols-3 gap-8 mt-10">

            {/* LEFT */}
            <div className="space-y-8">

              {/* Parent Info */}
              <div className="bg-white border rounded-[35px] p-7 shadow-sm">

                <div className="flex items-center gap-3 mb-8">

                  <div className="bg-blue-100 p-3 rounded-2xl">

                    <Users className="text-blue-600" />
                  </div>

                  <h1 className="text-2xl font-black">
                    Parent Information
                  </h1>
                </div>

                <div className="space-y-6">

                  {/* Parent Name */}
                  <div>

                    <p className="text-gray-400 mb-2">
                      Parent Name
                    </p>

                    {
                      editMode ? (

                        <input
                          type="text"
                          value={
                            student.guardianName
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              guardianName:
                                e.target.value,
                            })
                          }
                          className="border w-full px-4 py-3 rounded-2xl"
                        />

                      ) : (

                        <h1 className="font-bold text-lg">
                          {
                            student.guardianName
                          }
                        </h1>
                      )
                    }
                  </div>

                  {/* Relation */}
                  <div>

                    <p className="text-gray-400 mb-2">
                      Relation
                    </p>

                    {
                      editMode ? (

                        <input
                          type="text"
                          value={
                            student.relation
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              relation:
                                e.target.value,
                            })
                          }
                          className="border w-full px-4 py-3 rounded-2xl"
                        />

                      ) : (

                        <h1 className="font-bold text-lg">
                          {
                            student.relation
                          }
                        </h1>
                      )
                    }
                  </div>

                  {/* Phone */}
                  <div>

                    <p className="text-gray-400 mb-2">
                      Primary Number
                    </p>

                    {
                      editMode ? (

                        <input
                          type="text"
                          value={
                            student.guardianPhone
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              guardianPhone:
                                e.target.value,
                            })
                          }
                          className="border w-full px-4 py-3 rounded-2xl"
                        />

                      ) : (

                        <h1 className="font-bold text-lg">
                          {
                            student.guardianPhone
                          }
                        </h1>
                      )
                    }
                  </div>

                  {/* Alt */}
                  <div>

                    <p className="text-gray-400 mb-2">
                      Alternative Number
                    </p>

                    {
                      editMode ? (

                        <input
                          type="text"
                          value={
                            student.alternatePhone
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              alternatePhone:
                                e.target.value,
                            })
                          }
                          className="border w-full px-4 py-3 rounded-2xl"
                        />

                      ) : (

                        <h1 className="font-bold text-lg">
                          {
                            student.alternatePhone
                          }
                        </h1>
                      )
                    }
                  </div>

                  {/* Email */}
                  <div>

                    <p className="text-gray-400 mb-2">
                      Email
                    </p>

                    {
                      editMode ? (

                        <input
                          type="email"
                          value={
                            student.email
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              email:
                                e.target.value,
                            })
                          }
                          className="border w-full px-4 py-3 rounded-2xl"
                        />

                      ) : (

                        <h1 className="font-bold text-lg break-all">
                          {
                            student.email
                          }
                        </h1>
                      )
                    }
                  </div>

                  {/* Address */}
                  <div>

                    <p className="text-gray-400 mb-2">
                      Address
                    </p>

                    {
                      editMode ? (

                        <textarea
                          value={
                            student.address
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              address:
                                e.target.value,
                            })
                          }
                          className="border w-full px-4 py-3 rounded-2xl"
                          rows={4}
                        />

                      ) : (

                        <h1 className="font-bold text-lg leading-8">
                          {
                            student.address
                          }
                        </h1>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="xl:col-span-2 space-y-8">

              {/* Academic */}
              <div className="bg-white border rounded-[35px] p-7 shadow-sm">

                <div className="flex items-center gap-3 mb-8">

                  <div className="bg-indigo-100 p-3 rounded-2xl">

                    <GraduationCap className="text-indigo-600" />
                  </div>

                  <h1 className="text-2xl font-black">
                    Academic Information
                  </h1>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                  {/* Grade */}
                  <div className="bg-blue-50 rounded-[30px] p-7">

                    <BookOpen className="text-blue-600" />

                    <p className="mt-5 text-gray-500">
                      Current Class
                    </p>

                    {
                      editMode ? (

                        <input
                          type="text"
                          value={
                            student.grade
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              grade:
                                e.target.value,
                            })
                          }
                          className="w-full mt-4 px-4 py-3 rounded-2xl border"
                        />

                      ) : (

                        <h1 className="text-4xl font-black mt-3 text-blue-700">
                          {
                            student.grade
                          }
                        </h1>
                      )
                    }
                  </div>

                  {/* Attendance */}
                  <div className="bg-green-50 rounded-[30px] p-7">

                    <User className="text-green-600" />

                    <p className="mt-5 text-gray-500">
                      Attendance
                    </p>

                    {
                      editMode ? (

                        <input
                          type="number"
                          value={
                            student.attendance
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              attendance:
                                e.target.value,
                            })
                          }
                          className="w-full mt-4 px-4 py-3 rounded-2xl border"
                        />

                      ) : (

                        <h1 className="text-4xl font-black mt-3 text-green-700">
                          {
                            student.attendance
                          }
                          %
                        </h1>
                      )
                    }
                  </div>

                  {/* Year */}
                  <div className="bg-orange-50 rounded-[30px] p-7">

                    <Calendar className="text-orange-600" />

                    <p className="mt-5 text-gray-500">
                      Admission Year
                    </p>

                    {
                      editMode ? (

                        <input
                          type="number"
                          value={
                            student.admissionYear
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              admissionYear:
                                e.target.value,
                            })
                          }
                          className="w-full mt-4 px-4 py-3 rounded-2xl border"
                        />

                      ) : (

                        <h1 className="text-4xl font-black mt-3 text-orange-700">
                          {
                            student.admissionYear
                          }
                        </h1>
                      )
                    }
                  </div>

                  {/* Gender */}
                  <div className="bg-purple-50 rounded-[30px] p-7">

                    <Shield className="text-purple-600" />

                    <p className="mt-5 text-gray-500">
                      Gender
                    </p>

                    {
                      editMode ? (

                        <select
                          value={
                            student.gender
                          }
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              gender:
                                e.target.value,
                            })
                          }
                          className="w-full mt-4 px-4 py-3 rounded-2xl border"
                        >
                          <option>
                            Male
                          </option>

                          <option>
                            Female
                          </option>
                        </select>

                      ) : (

                        <h1 className="text-3xl font-black mt-3 text-purple-700">
                          {
                            student.gender
                          }
                        </h1>
                      )
                    }
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;