import axios from "axios";

const BASE_URL= process.env.REACT_APP_BASE_API;

async function getPatientsData(){
  const promise = await axios.get(`${BASE_URL}/patients`);
  return promise;
}

async function fetchSortedResults(term, order){
  const promise = await axios.get(`${BASE_URL}/patients?term=${term}&order=${order}`);
  return promise;
}

async function addNewPatientData(data){
  const promise = await axios.post(`${BASE_URL}/patients`, data);
  return promise;
}

async function editPatientData(id, data){
  const promise = await axios.put(`${BASE_URL}/patients/${id}`, data);
  return promise;
}

async function getPatientDataById(id){
  const promise = await axios.get(`${BASE_URL}/patients/${id}`);
  return promise;
}

async function getPatientBySearchBar(term){
  const promise = await axios.get(`${BASE_URL}/patients?term=${term}`);
  return promise;
}

async function deletePatientById(id){
  const promise = await axios.delete(`${BASE_URL}/patients/${id}`);
  return promise;
}
const patientsServices = {
  getPatientsData,
  addNewPatientData,
  fetchSortedResults,
  editPatientData,
  getPatientDataById,
  deletePatientById,
  getPatientBySearchBar,
};

export default patientsServices;