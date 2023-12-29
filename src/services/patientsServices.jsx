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

const patientsServices = {
  getPatientsData,
  addNewPatientData,
  fetchSortedResults,
};

export default patientsServices;