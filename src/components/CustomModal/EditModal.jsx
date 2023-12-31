import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { PatientContext } from "../../contexts/PatientContext";
import { useModal } from "../../hooks/useModal";
import patientsServices from "../../services/patientsServices";
import BasicInfoForm from "../PatientsInfo/BasicInfoForm";
import ContactInfoForm from "../PatientsInfo/ContactInfoForm";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

function EditModal(){
  const [selected, setSelected] = useState("tabInfo");
  const { editModalOpen, patientId, closeEditModal} = useModal();
  const {patientData, setPatientData, addressData, setAddressData} = useContext(PatientContext);

  function fetchDataById(){
    const promise = patientsServices.getPatientDataById(patientId);
    promise.then(res => {
      console.log(res.data);
      setPatientData(res.data.patient);
      setAddressData(res.data.address);
      localStorage.setItem("addressData", JSON.stringify(addressData));
      localStorage.setItem("patientData", JSON.stringify(patientData));
    }).catch(err => Swal.fire({
      icon:'error', text:'O paciente não existe no banco de dados!'
    }));
  }
  
  useEffect(() => {
    console.log("rodei");
    fetchDataById();
  },[]);

  return (
    <OverlayModal isOpen={editModalOpen} onRequestClose={closeEditModal}>
      <ContainerModal >
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
          <ModalFooter id={patientId} onClose={closeEditModal} selected={selected} setSelected={setSelected} />
        </Container>
      </ContainerModal>
    </OverlayModal>
  )
}

export default EditModal;

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
`;

const ModalContent= styled.div`
  width: 100%;
  height: auto;
  overflow-y: auto
`;
