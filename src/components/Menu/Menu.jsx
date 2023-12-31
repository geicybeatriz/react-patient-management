import styled from "styled-components";
import { useModal } from "../../hooks/useModal";

function Menu({isOpen, onClose, id}) {
  const { openEditModal, openDeleteModal } = useModal();

  const handleEditModalOpen = (id) => {
    openEditModal(id);
    onClose();
  }

  const handleDeleteModalOpen = (id) => {
    openDeleteModal(id);
    onClose();
  };

  return (
    <Container 
      isOpen={isOpen} 
      patientId={id}
    >
      <Div/>
      <MenuContainer>
        <MenuOption onClick={() => handleEditModalOpen(id)}>
          Editar
        </MenuOption>
        <MenuOption onClick={() => handleDeleteModalOpen(id)}>
          Excluir
        </MenuOption>
      </MenuContainer>
    </Container>
  )
}

export default Menu;

const MenuContainer = styled.div`
  width: 156px;
  height: 85px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #E8E8E8;
  box-shadow: 0px 1px 15px 0px rgba(14, 30, 47, 0.03);

  @media (max-width: 600px) {
    width: 80px;
    height: 42px;
  }
`;

const MenuOption = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 16px;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #E8E8E8;

  color: #656565;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; 

  cursor: pointer;

  &:hover{
    background-color: #EDF3FC;
    color: #136cdc;
  }
`;

const Div= styled.div`
  width: 50px;
  height: 1px;
  background-color: #ff7a00;
`;

const Container = styled.div`
  position: absolute;
  top: -30px;
  left: 20px;

  height: 87px;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`;