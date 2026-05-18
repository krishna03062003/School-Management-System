import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <div className="bg-blue-500 text-white p-6 rounded-xl w-60">
          <h1 className="text-2xl">Total Students</h1>
          <p className="text-4xl mt-3">120</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;