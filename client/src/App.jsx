import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";
import StudentDetails from "./pages/StudentDetails";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/students"
        element={<StudentList />}
      />

      <Route
        path="/add"
        element={<AddStudent />}
      />

      <Route
        path="/student/:id"
        element={<StudentDetails />}
      />

    </Routes>
  );
}

export default App;