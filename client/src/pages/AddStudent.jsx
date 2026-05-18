import { useState } from "react";
import Navbar from "../components/Navbar";
import { createStudent } from "../services/studentService";

const AddStudent = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent(form);
    alert("Student Added");
  };

  return (
    <>
      <Navbar />

      <form
        onSubmit={handleSubmit}
        className="p-10 flex flex-col gap-4 max-w-md"
      >
        <input
          type="text"
          placeholder="Name"
          className="border p-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Course"
          className="border p-2"
          onChange={(e) => setForm({ ...form, course: e.target.value })}
        />

        <input
          type="number"
          placeholder="Age"
          className="border p-2"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <button className="bg-blue-600 text-white p-2">
          Add Student
        </button>
      </form>
    </>
  );
};

export default AddStudent;