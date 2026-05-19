import {
  useEffect,
  useState,
} from "react";

import {
  Search,
  Bell,
  Plus,
  Trash2,
  Eye,
  Users,
  GraduationCap,
  Filter,
  UserCheck,
} from "lucide-react";

import {
  getStudents,
  deleteStudent,
} from "../services/studentService";

import {
  Link,
} from "react-router-dom";

const StudentList = () => {

  const [students, setStudents] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [grade, setGrade] =
    useState("");

  const [gender, setGender] =
    useState("");

  const [year, setYear] =
    useState("");

  // Fetch Students
  const fetchStudents =
    async (
      filters = {}
    ) => {

      try {

        setLoading(true);

        const res =
          await getStudents(
            filters
          );

        setStudents(
          res.data.students
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  // Top Grade
  const getTopGrade = () => {

    if (
      students.length === 0
    )
      return "N/A";

    const count = {};

    students.forEach(
      (
        student
      ) => {

        count[
          student.grade
        ] =
          (
            count[
              student.grade
            ] || 0
          ) + 1;
      }
    );

    let topGrade =
      "";

    let max = 0;

    for (const key in count) {

      if (
        count[key] > max
      ) {

        max =
          count[key];

        topGrade =
          key;
      }
    }

    return topGrade;
  };

  // Delete Student
  const removeStudent =
    async (id) => {

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

        fetchStudents({
          search,
          grade,
          gender,
          year,
        });

      } catch (error) {

        console.log(error);
      }
    };

  // Initial Fetch
  useEffect(() => {

    fetchStudents();

  }, []);

  // Filters + Debounce
  useEffect(() => {

    const delay =
      setTimeout(() => {

        // First load
        if (
          !search &&
          !grade &&
          !gender &&
          !year
        ) {

          fetchStudents();

        } else {

          fetchStudents({
            search,
            grade,
            gender,
            year,
          });
        }

      }, 700);

    return () =>
      clearTimeout(
        delay
      );

  }, [
    search,
    grade,
    gender,
    year,
  ]);

  return (
    <div className="min-h-screen bg-[#0B1120] flex justify-center p-3 md:p-5">

      <div className="w-full max-w-[1350px] bg-white rounded-[30px] overflow-hidden border-[3px] border-[#635BFF]">

        {/* Header */}
        <div className="flex justify-between items-center px-5 md:px-10 py-5 border-b">

          <div>

            <h1 className="text-2xl font-black text-blue-600">
              EduManage
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Student Management
            </p>
          </div>

          <div className="flex items-center gap-4">

            <div className="bg-gray-100 p-3 rounded-full">

              <Bell
                size={18}
                className="text-gray-600"
              />
            </div>

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-11 h-11 rounded-full border-2 border-blue-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-10">

          {/* Top */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-5 justify-between">

            <div>

              <h1 className="text-3xl md:text-4xl font-black">
                Students
              </h1>

              <p className="text-gray-500 mt-2">
                Manage all student records
              </p>
            </div>

            <Link
              to="/add"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold"
            >

              <Plus size={20} />

              Add Student
            </Link>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-5 mt-10">

            {/* Total Students */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-[30px] p-6 text-white">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-blue-100">
                    Total Students
                  </p>

                  <h1 className="text-4xl font-black mt-4">

                    {
                      students.length
                    }

                  </h1>
                </div>

                <div className="bg-white/20 p-4 rounded-2xl">

                  <Users size={28} />
                </div>
              </div>
            </div>

            {/* Boys */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[30px] p-6 text-white">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-indigo-100">
                    Boys
                  </p>

                  <h1 className="text-4xl font-black mt-4">

                    {
                      students.filter(
                        (
                          student
                        ) =>
                          student.gender ===
                          "Male"
                      ).length
                    }

                  </h1>
                </div>

                <div className="bg-white/20 p-4 rounded-2xl">

                  <UserCheck size={28} />
                </div>
              </div>
            </div>

            {/* Girls */}
            <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-[30px] p-6 text-white">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-pink-100">
                    Girls
                  </p>

                  <h1 className="text-4xl font-black mt-4">

                    {
                      students.filter(
                        (
                          student
                        ) =>
                          student.gender ===
                          "Female"
                      ).length
                    }

                  </h1>
                </div>

                <div className="bg-white/20 p-4 rounded-2xl">

                  <GraduationCap size={28} />
                </div>
              </div>
            </div>

            {/* Top Grade */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-[30px] p-6 text-white">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-green-100">
                    Top Grade
                  </p>

                  <h1 className="text-2xl font-black mt-4">

                    {
                      getTopGrade()
                    }

                  </h1>
                </div>

                <div className="bg-white/20 p-4 rounded-2xl">

                  <GraduationCap size={28} />
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 border rounded-[30px] p-5 md:p-7 mt-10">

            <div className="flex items-center gap-3 mb-6">

              <Filter className="text-blue-600" />

              <h1 className="text-xl font-black">
                Search & Filters
              </h1>
            </div>

            <div className="grid lg:grid-cols-4 gap-5">

              {/* Search */}
              <div className="lg:col-span-2 flex items-center border rounded-2xl px-5 bg-white">

                <Search
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={
                    search
                  }
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  placeholder="Search by name, roll number..."
                  className="w-full px-4 py-4 outline-none rounded-2xl"
                />
              </div>

              {/* Grade */}
              <select
                value={
                  grade
                }
                onChange={(e) =>
                  setGrade(
                    e.target.value
                  )
                }
                className="border rounded-2xl px-5 py-4 outline-none bg-white"
              >

                <option value="">
                  All Grades
                </option>

                {[
                  1,2,3,4,5,6,
                  7,8,9,10,11,12,
                ].map(
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

              {/* Gender */}
              <select
                value={
                  gender
                }
                onChange={(e) =>
                  setGender(
                    e.target.value
                  )
                }
                className="border rounded-2xl px-5 py-4 outline-none bg-white"
              >

                <option value="">
                  All Gender
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

            {/* Bottom */}
            <div className="grid md:grid-cols-2 gap-5 mt-5">

              {/* Year */}
              <select
                value={year}
                onChange={(e) =>
                  setYear(
                    e.target.value
                  )
                }
                className="border rounded-2xl px-5 py-4 outline-none bg-white"
              >

                <option value="">
                  All Admission Years
                </option>

                {[
                  2022,
                  2023,
                  2024,
                  2025,
                  2026,
                ].map(
                  (
                    item
                  ) => (
                    <option
                      key={
                        item
                      }
                    >
                      {item}
                    </option>
                  )
                )}
              </select>

              {/* Reset */}
              <button
                onClick={() => {

                  setSearch("");
                  setGrade("");
                  setGender("");
                  setYear("");
                }}
                className="border rounded-2xl px-5 py-4 font-semibold hover:bg-gray-100 transition"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Loading */}
          {loading && (

            <div className="flex justify-center py-20">

              <div className="text-center">

                <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

                <p className="mt-5 text-gray-500 font-semibold">
                  Loading Students...
                </p>
              </div>
            </div>
          )}

          {/* Cards */}
          {!loading &&
            students.length >
              0 && (

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7 mt-10">

                {students.map(
                  (
                    student
                  ) => (

                    <div
                      key={
                        student._id
                      }
                      className="border rounded-[30px] p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300 bg-white"
                    >

                      {/* Image */}
                      <div className="flex justify-center">

                        <img
                          src={
                            student.image
                          }
                          alt=""
                          className="w-28 h-28 rounded-full object-cover border-[5px] border-blue-500"
                        />
                      </div>

                      {/* Info */}
                      <div className="text-center mt-6">

                        <h1 className="text-2xl font-black">
                          {
                            student.fullName
                          }
                        </h1>

                        <p className="text-gray-500 mt-2">
                          Roll No:
                          {" "}
                          {
                            student.rollNumber
                          }
                        </p>

                        <div className="flex justify-center gap-3 flex-wrap mt-5">

                          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                            {
                              student.grade
                            }
                          </span>

                          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                            {
                              student.gender
                            }
                          </span>

                          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                            {
                              student.admissionYear
                            }
                          </span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="grid grid-cols-2 gap-4 mt-8">

                        <Link
                          to={`/student/${student._id}`}
                          className="border py-3 rounded-2xl flex justify-center items-center gap-2 hover:bg-gray-100 transition font-semibold"
                        >

                          <Eye
                            size={18}
                          />

                          View
                        </Link>

                        <button
                          onClick={() =>
                            removeStudent(
                              student._id
                            )
                          }
                          className="bg-red-100 hover:bg-red-200 transition text-red-600 rounded-2xl flex justify-center items-center gap-2 font-semibold"
                        >

                          <Trash2
                            size={18}
                          />

                          Delete
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

          {/* Empty */}
          {!loading &&
            students.length ===
              0 && (

              <div className="text-center py-24">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                  alt=""
                  className="w-40 mx-auto"
                />

                <h1 className="text-4xl font-black text-gray-700 mt-8">
                  No Students Found
                </h1>

                <p className="text-gray-500 mt-4 max-w-md mx-auto leading-8">
                  No students matched your filters or search query.
                </p>

                <Link
                  to="/add"
                  className="inline-flex mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition"
                >
                  Add Student
                </Link>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default StudentList;