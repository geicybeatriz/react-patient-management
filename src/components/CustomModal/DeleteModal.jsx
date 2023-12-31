import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import Swal from "sweetalert2";
import deletePicture from "../../assets/images/delete-picture.png";
import { useModal } from "../../hooks/useModal";
import patientsServices from "../../services/patientsServices";
import Label from "../Label/Label";
import Button from "../UI/Button/Button";

function DeleteModal(){
  const { deleteModalOpen, closeDeleteModal, patientId} = useModal()

  const deletePatientData = () => {
    const promise = patientsServices.deletePatientById(patientId);
    promise.then(res => {
      Swal.fire({
        icon: 'success', text:'Os dados foram excluído com sucesso.'
      });
      console.log(res.data);
    }).catch(err => console.log(err))
  }

  return (
    <>
      <ContainerDeleteModal isOpen={deleteModalOpen} onRequestClose={closeDeleteModal}>
        <Container>
          <HeadModal>
            <Label 
              text="Excluir paciente?" 
              type="primary"
              color="#510972"
              fontSize="24px"

            />
            <CloseIcon>
              <IoMdClose size={24} color="#656565" onClick={() => closeDeleteModal(true)}/>
            </CloseIcon>
          </HeadModal>
          <ContentModal>
            <ContainerPicture>
              <Picture src={deletePicture}/>
            </ContainerPicture>
            <ContainerPicture>
            <TextModal height="43px" padding="16px" >
              <Label 
                text="Tem certeza que deseja excluir o paciente selecionado?"
                fontSize="16px"
                color="#565656"
              />
            </TextModal>
            <TextModal height="43px" padding="10px">
              <Label fontSize="16px" type="primary"
                color="#565656"
                text="Esta ação não poderá ser desfeita."
              />
            </TextModal>
            </ContainerPicture>
          </ContentModal>
          <FooterModal>
            <ContainerButton onClick={() => closeDeleteModal(true)}>
              <Button 
                width="85px"
                padding="8px 16px" 
                text="Cancelar"
                backgroundColor="#fff"
                borderColor="#136CDC"
                color="#136cdc"
              />
            </ContainerButton>
            <ContainerButton onClick={deletePatientData}>
              <Button 
                width="73px"
                padding="8px 16px" 
                text="Excluir"
                backgroundColor="#c52525"
                color="#fff"
              />
            </ContainerButton>
          </FooterModal>
        </Container>
      </ContainerDeleteModal>
    </>
  )
}

export default DeleteModal;

const ContainerDeleteModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top:0;
  
  display: ${props => props.isOpen ? "flex" : "none"};
  justify-content: center;
  align-items: center;

  background-color: #f6f6f6;
  z-index: 1000;
  
`;

const Container = styled.div`
  display: flex;
  width: 517px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  background-color: #fff;
`;

const HeadModal = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #C0C0C0;
`;

const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const ContainerPicture = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  width: 87.628px;
  height: 132px;
`;

const TextModal = styled.div`
  height: ${props => props.height};
  padding: ${props => props.padding};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FooterModal = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 16px 16px 0;
  gap: 16px;
  border-top: 1px solid #C0C0C0;
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;