import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import Label from "../Label/Label";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../UI/Button/Button";

function PatientsListHeader(){
  const { openAddModal } = useModal();
  return (
    <Container>
      <Content>
        <Label type='text' color='#000' text='Listagem de pacientes' fontSize="14px"/>
      </Content>
      <FixedContainer>
        <SearchBar />
        <ContainerButton onClick={() => openAddModal(true)}>
          <Button 
            typeButton="add-patients"
            text="Adicionar paciente"
            backgroundColor="#136CDC"
            color="#fff"
          />
        </ContainerButton>
      </FixedContainer>
    </Container>
  )
}
export default PatientsListHeader;

const Container = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 5px 5px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;

  @media (min-width: 992px) {
    height: 96px;
    flex-direction: row;
  }
  @media (min-width: 1670px) {
    height: 96px;
    flex-direction: row;
    gap: 300px;
  }

`;

const FixedContainer = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media (min-width: 992px) {
    height: 59px;
    padding: 10.5px 11px 8.5px 125.5px;
    justify-content: flex-end;
    gap: 11.5px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px){
    width: 40%;
    justify-content: end;
  }
`;

const ContainerButton = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`;
