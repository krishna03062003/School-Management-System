import {
  Users,
  UserPlus,
  Bell,
  Home as HomeIcon,
  LayoutDashboard,
  Users2,
  Plus,
  ArrowRight,
  Mars,
  Venus,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import { getStudents } from "../services/studentService";

const Dashboard = () => {

  const navigate =
    useNavigate();

  const [students, setStudents] =
    useState([]);

  const fetchStudents =
    async () => {

      try {

        const res =
          await getStudents();

        setStudents(
          res.data.students
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    fetchStudents();

  }, []);

  // Stats
  const totalStudents =
    students.length;

  const maleStudents =
    students.filter(
      (item) =>
        item.gender ===
        "Male"
    ).length;

  const femaleStudents =
    students.filter(
      (item) =>
        item.gender ===
        "Female"
    ).length;

  const newStudents =
    students.slice(-5);

  return (
    <div className="min-h-screen bg-[#0F172A] flex justify-center items-center p-3">

      {/* Main */}
      <div className="w-full max-w-[1200px] min-h-screen bg-white rounded-2xl border-[3px] border-[#6D5DF6] overflow-hidden relative">

        {/* Navbar */}
        <div className="flex justify-between items-center px-4 md:px-8 py-4 border-b">

          <h1 className="text-blue-600 font-bold text-xl">
            EduManage
          </h1>

          <div className="flex items-center gap-4">

            <Bell size={18} />

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Welcome */}
        <div className="px-4 md:px-8 pt-6">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">

            <h1 className="text-4xl font-bold">
              Welcome Back Admin 👋
            </h1>

            <p className="mt-3 text-blue-100 max-w-2xl">
              Manage all students,
              monitor records,
              and maintain your
              school efficiently
              with EduManage.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8 mt-8">

          {/* Total Students */}
          <div
            onClick={() =>
              navigate(
                "/students"
              )
            }
            className="border rounded-2xl p-5 cursor-pointer hover:shadow-xl transition bg-white"
          >

            <div className="flex justify-between items-center">

              <Users
                size={22}
                className="text-blue-600"
              />

              <span className="text-sm text-green-500 font-semibold">
                Live
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-5">
              TOTAL STUDENTS
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {
                totalStudents
              }
            </h1>
          </div>

          {/* Male */}
          <div className="border rounded-2xl p-5 bg-white">

            <div className="flex justify-between items-center">

              <Mars
                size={22}
                className="text-sky-500"
              />

              <span className="text-sm text-gray-500">
                Boys
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-5">
              MALE STUDENTS
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {
                maleStudents
              }
            </h1>
          </div>

          {/* Female */}
          <div className="border rounded-2xl p-5 bg-white">

            <div className="flex justify-between items-center">

              <Venus
                size={22}
                className="text-pink-500"
              />

              <span className="text-sm text-gray-500">
                Girls
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-5">
              FEMALE STUDENTS
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {
                femaleStudents
              }
            </h1>
          </div>

          {/* New */}
          <div className="border rounded-2xl p-5 bg-white">

            <div className="flex justify-between items-center">

              <UserPlus
                size={22}
                className="text-orange-500"
              />

              <span className="text-sm text-blue-500">
                This Year
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-5">
              NEW STUDENTS
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {
                newStudents.length
              }
            </h1>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 md:px-8 mt-10">

          <h1 className="text-2xl font-bold">
            Quick Actions
          </h1>

          <div className="grid md:grid-cols-3 gap-5 mt-5">

            {/* Add */}
            <Link
              to="/add"
              className="border rounded-2xl p-6 hover:shadow-xl transition bg-white"
            >

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex justify-center items-center">

                <Plus className="text-blue-600" />
              </div>

              <h1 className="text-xl font-bold mt-5">
                Add Student
              </h1>

              <p className="text-gray-500 mt-2">
                Register new
                student
              </p>
            </Link>

            {/* Students */}
            <Link
              to="/students"
              className="border rounded-2xl p-6 hover:shadow-xl transition bg-white"
            >

              <div className="w-14 h-14 rounded-xl bg-sky-100 flex justify-center items-center">

                <Users2 className="text-sky-600" />
              </div>

              <h1 className="text-xl font-bold mt-5">
                Student List
              </h1>

              <p className="text-gray-500 mt-2">
                View all students
              </p>
            </Link>

            {/* Home */}
            <Link
              to="/"
              className="border rounded-2xl p-6 hover:shadow-xl transition bg-white"
            >

              <div className="w-14 h-14 rounded-xl bg-green-100 flex justify-center items-center">

                <HomeIcon className="text-green-600" />
              </div>

              <h1 className="text-xl font-bold mt-5">
                Home Page
              </h1>

              <p className="text-gray-500 mt-2">
                Return to home
              </p>
            </Link>
          </div>
        </div>

        {/* Recent Students */}
        <div className="px-4 md:px-8 mt-10 pb-28">

          <div className="flex justify-between items-center">

            <h1 className="text-2xl font-bold">
              Recently Added
              Students
            </h1>

            <Link
              to="/students"
              className="text-blue-600 flex items-center gap-2"
            >

              View All

              <ArrowRight
                size={18}
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">

            {newStudents
              .reverse()
              .map(
                (
                  student
                ) => (

                  <div
                    key={
                      student._id
                    }
                    className="border rounded-2xl p-5 hover:shadow-xl transition bg-white"
                  >

                    <div className="flex items-center gap-4">

                      <img
                        src={
                          student.image
                        }
                        alt=""
                        className="w-16 h-16 rounded-full object-cover"
                      />

                      <div>

                        <h1 className="font-bold text-lg">
                          {
                            student.fullName
                          }
                        </h1>

                        <p className="text-gray-500 text-sm mt-1">
                          Grade{" "}
                          {
                            student.grade
                          }
                          {" "}
                          •{" "}
                          {
                            student.section
                          }
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex justify-between items-center">

                      <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm">
                        Active
                      </span>

                      <button
                        onClick={() =>
                          navigate(
                            `/student/${student._id}`
                          )
                        }
                        className="text-blue-600 font-medium"
                      >
                        View
                      </button>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] bg-white border-t flex justify-around items-center py-4">

          <Link
            to="/"
            className="flex flex-col items-center text-gray-500"
          >

            <HomeIcon
              size={20}
            />

            <p className="text-xs mt-1">
              Home
            </p>
          </Link>

          <Link
            to="/dashboard"
            className="flex flex-col items-center bg-sky-100 px-6 py-2 rounded-full text-blue-700"
          >

            <LayoutDashboard
              size={20}
            />

            <p className="text-xs mt-1 font-medium">
              Dashboard
            </p>
          </Link>

          <Link
            to="/students"
            className="flex flex-col items-center text-gray-500"
          >

            <Users2
              size={20}
            />

            <p className="text-xs mt-1">
              Students
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;