import { useState } from "react";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import BasicInfoForm from "../PatientsInfo/BasicInfoForm";
import ContactInfoForm from "../PatientsInfo/ContactInfoForm";
import CustomModal from "./CustomModal";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

function EditModal(){
  const [selected, setSelected] = useState("tabInfo");

  const { editModalOpen, patientId, closeEditModal} = useModal();
  console.log(patientId);
  return (
    <>
      <CustomModal isOpen={editModalOpen} onRequestClose={closeEditModal}>
        <Container>
          <ModalHeader selected={selected} setSelected={setSelected} />
          <ModalContent>
            {selected === "tabInfo" ? (
              <>
                <BasicInfoForm />
              </>
            ) : (
              <>
                <ContactInfoForm />
              </>
            )}
          </ModalContent>
          <ModalFooter selected={selected} setSelected={setSelected} />
        </Container>
      </CustomModal>
    </>
  )
}

export default EditModal;

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContent= styled.div`
  width: 100%;
`;
