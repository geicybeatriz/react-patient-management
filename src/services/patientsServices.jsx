import axios from "axios";

const BASE_URL= process.env.REACT_APP_BASE_API;

async function getPatientsData(){
  const promise = await axios.get(`${BASE_URL}/patients`);
  return promise;
}

const patientsServices = {
  getPatientsData,

};

export default patientsServices;