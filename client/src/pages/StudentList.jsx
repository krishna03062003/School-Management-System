import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getStudents, deleteStudent } from "../services/studentService";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const removeStudent = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-10">
        {students.map((student) => (
          <div
            key={student._id}
            className="border p-4 mb-4 rounded"
          >
            <h1>{student.name}</h1>
            <p>{student.email}</p>

            <button
              onClick={() => removeStudent(student._id)}
              className="bg-red-500 text-white px-3 py-1 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentList;