import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const StudentDetails = () => {

  const { id } = useParams();

  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold text-blue-600">
          Student Details
        </h1>

        <p className="mt-4">Student ID: {id}</p>
      </div>
    </>
  );
};

export default StudentDetails;