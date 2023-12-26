import styled from "styled-components";
import PatientsListHeader from "./PatientsListHeader";
import PatientsTable from "./PatientsTable";

function PatientsList() {
  return (
    <Container>
      <PatientsListHeader />
      <PatientsTable />
    </Container>
  )
}

export default PatientsList;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;