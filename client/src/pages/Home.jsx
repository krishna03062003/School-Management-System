import {
  UserPlus,
  Users,
  Home as HomeIcon,
  LayoutDashboard,
  Users2,
  Bell,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Info,
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

const Home = () => {

  const navigate =
    useNavigate();

  const [students, setStudents] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchStudents =
    async () => {

      try {

        setLoading(true);

        const res =
          await getStudents();

        setStudents(
          res.data.students
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchStudents();

  }, []);

  const recentStudents =
    students.slice(-3);

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B1120] flex justify-center items-center">

        <div className="text-center">

          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <h1 className="text-white text-2xl font-bold mt-6">
            Loading EduManage...
          </h1>

          <p className="text-blue-200 mt-2">
            Please wait
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] flex justify-center p-3 md:p-5">

      {/* Main */}
      <div className="w-full max-w-[1250px] bg-white rounded-[30px] overflow-hidden border-[3px] border-[#635BFF] relative">

        {/* Header */}
        <div className="flex justify-between items-center px-5 md:px-10 py-5 border-b bg-white sticky top-0 z-50">

          <div>

            <h1 className="text-2xl font-black text-blue-600">
              EduManage
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              School Management System
            </p>
          </div>

          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center">

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

        {/* Hero */}
        <div className="px-5 md:px-10 pt-8">

          <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-8 md:p-12">

            {/* Glow */}
            <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full -top-10 -right-10"></div>

            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">

              {/* Left */}
              <div>

                <div className="flex items-center gap-2 bg-white/20 w-fit px-4 py-2 rounded-full text-white text-sm">

                  <Sparkles size={16} />

                  Smart Student Management
                </div>

                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mt-6">

                  Manage Your
                  School Smarter
                </h1>

                <p className="text-blue-100 text-base md:text-lg leading-8 mt-6 max-w-2xl">

                  Modern school management
                  system with student
                  records, responsive
                  dashboard and powerful
                  MERN stack integration.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap mt-10">

                  <button
                    onClick={() =>
                      navigate(
                        "/dashboard"
                      )
                    }
                    className="bg-white text-blue-700 px-7 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-xl"
                  >
                    Open Dashboard
                  </button>

                  <button
                    onClick={() =>
                      navigate(
                        "/students"
                      )
                    }
                    className="border-2 border-white text-white px-7 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition duration-300"
                  >
                    View Students
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-5 mt-12">

                  <div>

                    <h1 className="text-white text-3xl font-black">
                      {
                        students.length
                      }+
                    </h1>

                    <p className="text-blue-100 text-sm mt-1">
                      Students
                    </p>
                  </div>

                  <div>

                    <h1 className="text-white text-3xl font-black">
                      12
                    </h1>

                    <p className="text-blue-100 text-sm mt-1">
                      Classes
                    </p>
                  </div>

                  <div>

                    <h1 className="text-white text-3xl font-black">
                      24/7
                    </h1>

                    <p className="text-blue-100 text-sm mt-1">
                      System
                    </p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="hidden lg:flex justify-center">

                <img
                  src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg"
                  alt=""
                  className="w-full max-w-md rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-5 md:px-10 mt-14">

          <div className="flex justify-between items-center">

            <h1 className="text-3xl font-black">
              Quick Actions
            </h1>

            <button
              onClick={() =>
                navigate(
                  "/dashboard"
                )
              }
              className="text-blue-600 font-semibold flex items-center gap-2"
            >
              Open Panel

              <ChevronRight
                size={18}
              />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {/* Add */}
            <Link
              to="/add"
              className="group bg-gradient-to-br from-blue-50 to-white border rounded-[30px] p-7 hover:-translate-y-2 transition duration-300 hover:shadow-2xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex justify-center items-center group-hover:bg-blue-600 transition">

                <UserPlus className="text-blue-600 group-hover:text-white" />
              </div>

              <h1 className="text-2xl font-black mt-7">
                Add Student
              </h1>

              <p className="text-gray-500 mt-3 leading-7">
                Register and manage
                student profiles easily.
              </p>
            </Link>

            {/* Students */}
            <Link
              to="/students"
              className="group bg-gradient-to-br from-sky-50 to-white border rounded-[30px] p-7 hover:-translate-y-2 transition duration-300 hover:shadow-2xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-sky-100 flex justify-center items-center group-hover:bg-sky-600 transition">

                <Users className="text-sky-600 group-hover:text-white" />
              </div>

              <h1 className="text-2xl font-black mt-7">
                Student Records
              </h1>

              <p className="text-gray-500 mt-3 leading-7">
                View, update and manage
                all students.
              </p>
            </Link>

            {/* Dashboard */}
            <Link
              to="/dashboard"
              className="group bg-gradient-to-br from-indigo-50 to-white border rounded-[30px] p-7 hover:-translate-y-2 transition duration-300 hover:shadow-2xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex justify-center items-center group-hover:bg-indigo-600 transition">

                <LayoutDashboard className="text-indigo-600 group-hover:text-white" />
              </div>

              <h1 className="text-2xl font-black mt-7">
                Dashboard
              </h1>

              <p className="text-gray-500 mt-3 leading-7">
                Monitor and manage
                school analytics.
              </p>
            </Link>
          </div>
        </div>

        {/* Recently Added */}
        <div className="px-5 md:px-10 mt-16">

          <div className="flex justify-between items-center">

            <h1 className="text-3xl font-black">
              Recently Added
            </h1>

            <Link
              to="/students"
              className="text-blue-600 font-semibold flex items-center gap-2"
            >
              View All

              <ArrowRight
                size={18}
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

            {recentStudents
              .reverse()
              .map(
                (
                  student
                ) => (

                  <div
                    key={
                      student._id
                    }
                    className="border rounded-[30px] p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300 bg-white"
                  >

                    <div className="flex items-center gap-4">

                      <img
                        src={
                          student.image
                        }
                        alt=""
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                      />

                      <div>

                        <h1 className="font-black text-xl">
                          {
                            student.fullName
                          }
                        </h1>

                        <p className="text-gray-500 mt-1">
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

                    <button
                      onClick={() =>
                        navigate(
                          `/student/${student._id}`
                        )
                      }
                      className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition"
                    >
                      View Profile
                    </button>
                  </div>
                )
              )}
          </div>
        </div>

        {/* About Section */}
        <div className="px-5 md:px-10 mt-20">

          <div className="grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-r from-slate-50 to-blue-50 rounded-[35px] p-8 md:p-12">

            {/* Left */}
            <div>

              <div className="flex items-center gap-3 text-blue-600">

                <Info size={22} />

                <p className="font-bold">
                  About EduManage
                </p>
              </div>

              <h1 className="text-4xl font-black mt-5 leading-tight">
                Modern School
                Management Platform
              </h1>

              <p className="text-gray-600 leading-8 mt-6 text-lg">

                EduManage is a modern
                MERN stack based school
                management system built
                for managing student
                records, profiles,
                dashboard analytics and
                CRUD operations with a
                responsive and clean UI.

              </p>

              <button
                onClick={() =>
                  navigate(
                    "/dashboard"
                  )
                }
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition"
              >
                Explore Dashboard
              </button>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-5">

              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="rounded-3xl h-64 w-full object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="rounded-3xl h-64 w-full object-cover mt-10"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-5 md:px-10 mt-20 pb-32">

          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-[35px] p-10 md:p-14 text-center text-white relative overflow-hidden">

            <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full top-0 right-0"></div>

            <div className="relative z-10">

              <h1 className="text-4xl md:text-5xl font-black">
                Start Managing
                Students Efficiently
              </h1>

              <p className="text-blue-100 mt-5 text-lg max-w-2xl mx-auto leading-8">

                Simplify student
                management with a modern
                responsive dashboard and
                powerful backend system.

              </p>

              <button
                onClick={() =>
                  navigate(
                    "/add"
                  )
                }
                className="mt-10 bg-white text-blue-700 px-8 py-4 rounded-2xl font-black hover:scale-105 transition"
              >
                Add New Student
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1250px] bg-white border-t py-4 flex justify-around items-center z-50">

          <Link
            to="/"
            className="flex flex-col items-center text-blue-600"
          >

            <div className="bg-blue-100 p-3 rounded-full">

              <HomeIcon
                size={20}
              />
            </div>

            <p className="text-xs mt-1 font-semibold">
              Home
            </p>
          </Link>

          <Link
            to="/dashboard"
            className="flex flex-col items-center text-gray-500"
          >

            <LayoutDashboard
              size={20}
            />

            <p className="text-xs mt-1">
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

export default Home;