import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import CustomModal from "./CustomModal";

function AddModal (){
  const {addModalOpen, closeAddModal} = useModal();
  return (
    <>
      <CustomModal isOpen={addModalOpen} onRequestClose={closeAddModal}>
        <Container>
          
        </Container>
      </CustomModal>
    </>
  )
}

export default AddModal;

const Container = styled.div`
  width: 100%;
  background-color: red;
  color: #fff;
  font-size: 26px;
`;