import axios from "axios";

const API = "http://localhost:5000/api/students";

export const createStudent = (data) => axios.post(API, data);
export const getStudents = () => axios.get(API);
export const getStudent = (id) => axios.get(`${API}/${id}`);
export const deleteStudent = (id) => axios.delete(`${API}/${id}`);