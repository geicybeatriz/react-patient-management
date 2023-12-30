import styled from "styled-components";
import { useModal } from "../../hooks/useModal";

function Menu({isOpen, iconPosition, onClose, id}) {
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
      top={iconPosition.top} 
      left={iconPosition.left} 
      patientId={id}
    >
      <Div left={iconPosition.left}/>
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
  width: ${props => (props.left) ? `calc(${props.left} + 50px)` : '50px'};
  height: 1px;
  background-color: #ff7a00;
`;

const Container = styled.div`
  position: absolute;
  top: ${props => (props.top) ? `calc(${props.top} + 50px)` : 0};
  right: ${props => (props.left) ? `calc(${props.left} - 150px)` : 0};

  height: 87px;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;