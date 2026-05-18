import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/add">Add Student</Link>
      <Link to="/students">Students</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Navbar;