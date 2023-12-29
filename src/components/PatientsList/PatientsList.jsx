import { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import patientsServices from "../../services/patientsServices";
import Label from "../Label/Label";
import PatientsListHeader from "./PatientsListHeader";
import PatientsTable from "./PatientsTable";

function PatientsList() {
  const [patients, setPatients] = useState([]);

  function getPatientsData(){
    const promise = patientsServices.getPatientsData();
    promise.then(res => {
      setPatients(res.data);
    }).catch(_err => Swal.fire({
      title: 'Oops...',
      icon: 'error',
      text: 'Desculpe, ocorreu um erro interno no servidor.'
    }));
  }

  useEffect(() => {
    getPatientsData();
  },[])

  return (
    <Container>
      <PatientsListHeader />
      {patients.length !== 0 ? (
        <PatientsTable 
          patients={patients} 
          setPatients={setPatients}
        />
      ) : (
        <Container>
          <Label 
            text="Não há pacientes cadastrados no sistema!"
            type="secondary"
            color="#000"
            fontSize={16}
          />
        </Container>
      )}
    </Container>
  )
}

export default PatientsList;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
`;