import { useState } from "react";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import CustomModal from "./CustomModal";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";

function EditModal(){
  const [selected, setSelected] = useState("tabInfo");

  const { editModalOpen, patientId, closeEditModal} = useModal();
  console.log(patientId);
  return (
    <>
      <CustomModal isOpen={editModalOpen} onRequestClose={closeEditModal}>
        <Container>
          <ModalHeader selected={selected} setSelected={setSelected} />
          <ModalContent></ModalContent>
          <ModalFooter selected={selected} setSelected={setSelected} />
        </Container>
      </CustomModal>
    </>
  )
}

export default EditModal;

const Container = styled.div`
  width: 100%;
`;

const ModalContent= styled.div`
  width: 100%;
`;
