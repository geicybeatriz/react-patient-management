import { useEffect, useState } from "react";
import styled from "styled-components";
import patientsServices from "../../services/patientsServices";
import PatientsListHeader from "./PatientsListHeader";
import PatientsTable from "./PatientsTable";

function PatientsList() {
  const [patients, setPatients] = useState([]);

  function getPatientsData(){
    const promise = patientsServices.getPatientsData();
    promise.then(res => {
      console.log(res.data);
      setPatients(res.data);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    getPatientsData();
  },[])

  return (
    <Container>
      <PatientsListHeader />
      <PatientsTable 
        patients={patients} 
        setPatients={setPatients}
      />
    </Container>
  )
}

export default PatientsList;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;