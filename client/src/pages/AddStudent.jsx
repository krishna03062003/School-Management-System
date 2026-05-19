import { useState } from "react";

import {
  ArrowLeft,
  Bell,
  Upload,
  Shield,
  GraduationCap,
  Phone,
  User,
  MapPin,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import { createStudent } from "../services/studentService";

const AddStudent = () => {

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      fullName: "",
      dateOfBirth: "",
      gender: "",
      rollNumber: "",
      admissionNumber: "",
      admissionYear: "",

      grade: "",
      section: "",

      parentName: "",
      relation: "",
      parentPhone: "",
      alternativePhone: "",
      parentEmail: "",

      address: "",

      image:
        "https://i.pravatar.cc/300",
    });

  const handleChange = (
    e
  ) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        await createStudent(
          form
        );

        alert(
          "Student Added Successfully"
        );

        navigate(
          "/students"
        );

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
            "Something went wrong"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-[#0B1120] flex justify-center p-3 md:p-5">

      <div className="w-full max-w-[1250px] bg-white rounded-[30px] overflow-hidden border-[3px] border-[#635BFF]">

        {/* Header */}
        <div className="flex justify-between items-center px-5 md:px-10 py-5 border-b">

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                navigate(-1)
              }
              className="w-11 h-11 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition"
            >

              <ArrowLeft
                size={18}
              />
            </button>

            <div>

              <h1 className="text-2xl md:text-3xl font-black text-blue-600">
                Add Student
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Register new student profile
              </p>
            </div>
          </div>

          <div className="w-11 h-11 rounded-full bg-gray-100 flex justify-center items-center">

            <Bell
              size={18}
              className="text-gray-600"
            />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={
            handleSubmit
          }
          className="p-5 md:p-10"
        >

          <div className="bg-white border rounded-[35px] p-6 md:p-10 shadow-sm">

            {/* Upload */}
            <div className="flex flex-col items-center">

              <div className="relative">

                <img
                  src={
                    form.image
                  }
                  alt=""
                  className="w-32 h-32 rounded-full object-cover border-[5px] border-blue-500 shadow-lg"
                />

                <button
                  type="button"
                  className="absolute bottom-0 right-0 bg-blue-600 text-white p-3 rounded-full"
                >

                  <Upload
                    size={18}
                  />
                </button>
              </div>

              <h1 className="text-xl font-bold mt-5">
                Student Photo
              </h1>

              <p className="text-gray-500 text-sm mt-1">
                Upload profile image
              </p>
            </div>

            {/* Personal Information */}
            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex justify-center items-center">

                  <User className="text-blue-600" />
                </div>

                <div>

                  <h1 className="text-2xl font-black">
                    Personal Information
                  </h1>

                  <p className="text-gray-500 text-sm mt-1">
                    Student personal details
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div className="md:col-span-2">

                  <label className="font-semibold text-sm">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    required
                    value={
                      form.fullName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter Full Name"
                    className="w-full border rounded-2xl px-5 py-4 mt-2 outline-none focus:border-blue-500"
                  />
                </div>

                <div>

                  <label className="font-semibold text-sm">
                    Date Of Birth
                  </label>

                  <input
                    type="date"
                    name="dateOfBirth"
                    required
                    value={
                      form.dateOfBirth
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border rounded-2xl px-5 py-4 mt-2 outline-none focus:border-blue-500"
                  />
                </div>

                <div>

                  <label className="font-semibold text-sm">
                    Gender
                  </label>

                  <select
                    name="gender"
                    required
                    value={
                      form.gender
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border rounded-2xl px-5 py-4 mt-2 outline-none focus:border-blue-500"
                  >

                    <option value="">
                      Select Gender
                    </option>

                    <option>
                      Male
                    </option>

                    <option>
                      Female
                    </option>

                    <option>
                      Other
                    </option>
                  </select>
                </div>

                <div>

                  <label className="font-semibold text-sm">
                    Roll Number
                  </label>

                  <input
                    type="text"
                    name="rollNumber"
                    required
                    value={
                      form.rollNumber
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter Roll Number"
                    className="w-full border rounded-2xl px-5 py-4 mt-2 outline-none focus:border-blue-500"
                  />
                </div>

                <div>

                  <label className="font-semibold text-sm">
                    Admission Number
                  </label>

                  <input
                    type="text"
                    name="admissionNumber"
                    required
                    value={
                      form.admissionNumber
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Admission Number"
                    className="w-full border rounded-2xl px-5 py-4 mt-2 outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Academic */}
            <div className="mt-14 border-t pt-10">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex justify-center items-center">

                  <GraduationCap className="text-indigo-600" />
                </div>

                <div>

                  <h1 className="text-2xl font-black">
                    Academic Information
                  </h1>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">

                <div>

                  <label className="font-semibold text-sm">
                    Grade
                  </label>

                  <select
                    name="grade"
                    required
                    value={
                      form.grade
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border rounded-2xl px-5 py-4 mt-2 outline-none focus:border-blue-500"
                  >

                    <option value="">
                      Select Grade
                    </option>

                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(
                      (
                        item
                      ) => (
                        <option
                          key={
                            item
                          }
                        >
                          Grade {item}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>

                  <label className="font-semibold text-sm">
                    Section
                  </label>

                  <input
                    type="text"
                    name="section"
                    required
                    value={
                      form.section
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Section A"
                    className="w-full border rounded-2xl px-5 py-4 mt-2 outline-none focus:border-blue-500"
                  />
                </div>

                <div>

                  <label className="font-semibold text-sm">
                    Admission Year
                  </label>

                  <select
                    name="admissionYear"
                    required
                    value={
                      form.admissionYear
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border rounded-2xl px-5 py-4 mt-2 outline-none focus:border-blue-500"
                  >

                    <option value="">
                      Select Year
                    </option>

                    {[2022,2023,2024,2025,2026].map(
                      (
                        year
                      ) => (
                        <option
                          key={
                            year
                          }
                        >
                          {year}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* Parent */}
            <div className="mt-14 border-t pt-10">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-green-100 flex justify-center items-center">

                  <Phone className="text-green-600" />
                </div>

                <div>

                  <h1 className="text-2xl font-black">
                    Parent Information
                  </h1>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <input
                  type="text"
                  name="parentName"
                  required
                  value={
                    form.parentName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Parent Name"
                  className="border rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <select
                  name="relation"
                  required
                  value={
                    form.relation
                  }
                  onChange={
                    handleChange
                  }
                  className="border rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
                >

                  <option value="">
                    Select Relation
                  </option>

                  <option>
                    Father
                  </option>

                  <option>
                    Mother
                  </option>

                  <option>
                    Guardian
                  </option>
                </select>

                <input
                  type="text"
                  name="parentPhone"
                  required
                  pattern="[0-9]{10}"
                  value={
                    form.parentPhone
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="9876543210"
                  className="border rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  name="alternativePhone"
                  pattern="[0-9]{10}"
                  value={
                    form.alternativePhone
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Alternative Number"
                  className="border rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <div className="md:col-span-2">

                  <input
                    type="email"
                    name="parentEmail"
                    value={
                      form.parentEmail
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="parent@gmail.com"
                    className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mt-14 border-t pt-10">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex justify-center items-center">

                  <MapPin className="text-orange-600" />
                </div>

                <div>

                  <h1 className="text-2xl font-black">
                    Address Information
                  </h1>
                </div>
              </div>

              <textarea
                rows="5"
                name="address"
                required
                value={
                  form.address
                }
                onChange={
                  handleChange
                }
                placeholder="Residential Address"
                className="w-full border rounded-2xl px-5 py-4 mt-8 outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* Privacy */}
            <div className="mt-10 bg-blue-50 border border-blue-200 rounded-3xl p-6 flex gap-4">

              <Shield className="text-blue-600" />

              <div>

                <h1 className="font-bold text-blue-700">
                  Student Data Protection
                </h1>

                <p className="text-sm text-blue-600 mt-2 leading-7">
                  Student data is protected
                  and securely stored.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-12">

              <button
                type="button"
                onClick={() =>
                  navigate(
                    "/students"
                  )
                }
                className="px-7 py-4 rounded-2xl border font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={
                  loading
                }
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition"
              >

                {loading
                  ? "Saving..."
                  : "Save Student"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;