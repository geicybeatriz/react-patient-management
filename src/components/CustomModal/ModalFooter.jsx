import styled from "styled-components";
import Button from "../UI/Button/Button";

function ModalFooter({selected, setSelected}){
  return (
    <Container>
      {selected === 'tabInfo' ? (
        <ContainerButton onClick={() => setSelected('tabContact')}>
          <Button 
            color="#fff" 
            backgroundColor="#136CDC" 
            text="Próximo"
          />
        </ContainerButton>
      ) : (
        <ContainerButton onClick={() => setSelected('tabInfo')}>
          <Button 
            color="#fff" 
            backgroundColor="#136CDC" 
            text="Salvar"
          />
        </ContainerButton>
      )}
    </Container>
  )
}

export default ModalFooter;

const Container = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ContainerButton= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;