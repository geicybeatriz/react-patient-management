import styled from "styled-components";
import AddModal from "../../components/CustomModal/AddModal";
import Logo from "../../components/Logo/Logo";
import PatientsList from "../../components/PatientsList/PatientsList";
import EditModal from "../../components/CustomModal/EditModal";
import DeleteModal from "../../components/CustomModal/DeleteModal";

function Home(){
  return (
    <Container>
      <Logo/>
      <PatientsList />
      <AddModal />
      <EditModal />
      <DeleteModal />
    </Container>
  )
}

export default Home;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
`;
