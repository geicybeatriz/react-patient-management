import { useContext } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { PatientContext } from "../../contexts/PatientContext";
import patientsServices from "../../services/patientsServices";
import Button from "../UI/Button/Button";

function ModalFooter({id, onClose, selected, setSelected}){
  const {patientData, setPatientData, setAddressData, addressData} = useContext(PatientContext);

  const data = {
    patientData: {
      nome: patientData.nome,
      apelido: patientData.apelido,
      email: patientData.email,
      telefone: patientData.telefone,
      nacionalidade: patientData.nacionalidade,
      genero: patientData.genero,
      dataNascimento: patientData.dataNascimento,
      cpf: patientData.cpf,
      rg: patientData.rg,
      estadoCivil: patientData.estadoCivil,
      observacoes: patientData.observacoes
    },
    addressData: {
      cep: addressData.cep,
      logradouro: addressData.logradouro,
      numero: addressData.numero,
      cidade: addressData.cidade,
      uf: addressData.uf,
      bairro: addressData.bairro,
      complemento:addressData.complemento
  }};

  function handleSubmitData(e){
    e.preventDefault();
    console.log(data);
    if(id) {
      saveEditData(id, data);
    }
    addNewPatient(data);
  } 

  function saveEditData(id, data){
    const promise = patientsServices.editPatientData(id, data);
    promise.then(res => {
      setPatientData({nome: '', apelido: '', email: '', telefone: '', nacionalidade: '', genero: '', dataNascimento: '',  cpf: '', rg: '', estadoCivil:'', observacoes:''})
      setAddressData({cep: '', logradouro: '', numero: '', cidade: '', uf: '', bairro: '', complemento: ''})
      console.log(res.data);
      localStorage.removeItem('patientData');
      localStorage.removeItem('addressData');
      Swal.fire({
        icon: "success", title: "Os dados do paciente foram atualizados!"
      });
      onClose();
    }).catch(err => {
      console.log(err);
      Swal.fire({
        icon: "error", title:"Erro ao atualizar os dados."
      })
    })
  }

  function addNewPatient(data){
    const promise = patientsServices.addNewPatientData(data);
    promise.then(res => {
      setPatientData({nome: '', apelido: '', email: '', telefone: '', nacionalidade: '', genero: '', dataNascimento: '',  cpf: '', rg: '', estadoCivil:'', observacoes:''})
      setAddressData({cep: '', logradouro: '', numero: '', cidade: '', uf: '', bairro: '', complemento: ''})
      localStorage.removeItem('patientData');
      localStorage.removeItem('addressData');
      console.log(res.data);
      Swal.fire({
        icon: "success", title: "Os dados do paciente foram atualizados!"
      });
      onClose();
    }).catch(err => {
      console.log(err);
      Swal.fire({
        icon: "error", title:"Erro ao atualizar os dados."
      })
    })
  }

  return (
    <Container>
      {selected === 'tabInfo' ? (
        <ContainerButton onClick={() => setSelected('tabContact')}>
          <Button 
            width="205.364px"
            color="#fff" 
            backgroundColor="#136CDC" 
            text="Próximo"
          />
        </ContainerButton>
      ) : (
        <ContainerButton onClick={handleSubmitData}>
          <Button 
            width="205.364px"
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