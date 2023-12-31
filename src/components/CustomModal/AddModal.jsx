import { useState } from "react";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import BasicInfoForm from "../PatientsInfo/BasicInfoForm";
import ContactInfoForm from "../PatientsInfo/ContactInfoForm";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

function AddModal (){
  const [selected, setSelected] = useState("tabInfo");
  const {addModalOpen, closeAddModal} = useModal();

  return (
    <OverlayModal>
      <ContainerModal isOpen={addModalOpen} onClose={closeAddModal}>
        <Container>
          <ModalHeader selected={selected} setSelected={setSelected}/>
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
          <ModalFooter onClose={closeAddModal} selected={selected} setSelected={setSelected}/>
        </Container>
      </ContainerModal>
    </OverlayModal>
  )
}

export default AddModal;

const OverlayModal = styled.main`
  position: absolute;
  top:0;
  left: 0;

  z-index: 1000;
  background-color: #f6f6f6;
  width: 100vw;
  height: 100vh;
  opacity: 1;

  display: ${props => props.isOpen ? "flex" : "none"};
  justify-content: center;
  padding: 50px 50px;
`;

const ContainerModal = styled.div`
  margin-bottom: 50px;
  width: 792px;
  height: 707px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 32px 19px;
`;

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

const ModalContent= styled.div`
  width: 100%;
  height: auto;
  overflow-y: auto
`;