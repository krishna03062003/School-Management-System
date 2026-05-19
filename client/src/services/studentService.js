import axios from "axios";

const API =
  "http://localhost:5000/api/students";


// Create Student
export const createStudent =
  (data) =>
    axios.post(
      API,
      data
    );


// Get All Students
export const getStudents =
  (params = {}) =>
    axios.get(API, {
      params,
    });


// Get Single Student
export const getStudent =
  (id) =>
    axios.get(
      `${API}/${id}`
    );


// Update Student
export const updateStudent =
  (id, data) =>
    axios.put(
      `${API}/${id}`,
      data
    );


// Delete Student
export const deleteStudent =
  (id) =>
    axios.delete(
      `${API}/${id}`
    );