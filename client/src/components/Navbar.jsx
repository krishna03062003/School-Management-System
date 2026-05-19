import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-4 border-b bg-white">

      <h1 className="text-2xl font-bold text-blue-600">
        EduManage
      </h1>

      <div className="flex gap-6 text-gray-700 font-medium">

        <Link
          to="/"
          className={`hover:text-blue-600 ${
            location.pathname === "/"
              ? "text-blue-600"
              : ""
          }`}
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className={`hover:text-blue-600 ${
            location.pathname ===
            "/dashboard"
              ? "text-blue-600"
              : ""
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/students"
          className={`hover:text-blue-600 ${
            location.pathname ===
              "/students" ||
            location.pathname.includes(
              "/student/"
            )
              ? "text-blue-600"
              : ""
          }`}
        >
          Students
        </Link>

        <Link
          to="/add"
          className={`hover:text-blue-600 ${
            location.pathname ===
            "/add"
              ? "text-blue-600"
              : ""
          }`}
        >
          Add Student
        </Link>
      </div>
    </div>
  );
};

export default Navbar;