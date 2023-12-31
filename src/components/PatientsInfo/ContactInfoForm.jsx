import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { PatientContext } from "../../contexts/PatientContext";
import Label from "../Label/Label";
import CustomInput from "../UI/Inputs/CustomInput";

const cepRegex = /^[0-9]{8}$/;
const VIACEP_URL = process.env.REACT_APP_VIACEP_API;

function ContactInfoForm(){
  const [value, setValue] = useState('');
  const [dataCep, setDataCep] = useState({});
  const {patientData, setPatientData, addressData, setAddressData} = useContext(PatientContext);

  const handlePatientInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressInputChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  function fetchDataCep(term){
    const promise = axios.get(`${VIACEP_URL}/${term}/json`);
    promise
      .then(res => {
        console.log(res.data);
        setDataCep(res.data);
        setAddressData({...addressData, cep: res.data.cep})
      })
      .catch(err => Swal.fire({
        icon: 'error', title:'O CEP é inválido!' 
      }));
  }

  function searchAndValidateCEP(e) {
    setValue(e.target.value);
    let cep = e.target.value.replace(/\D/g, '');
    console.log(cep);

    if (cep !== '' && cepRegex.test(cep)) {
      fetchDataCep(cep);
    } else if (cep !== '') {
      Swal.fire({
        icon: "error",
        title: "Formato de CEP inválido.",
      });
    }
  }

  return (
    <Container>
      <FormContainer>
        <FormItem>
          <Label text="CEP" color="#656565" />
          <CustomInput type="text" content="Digite" id="cep" 
            name="cep" value={value} 
            onChange={searchAndValidateCEP} />
        </FormItem>
        <FormItem>
          <Label text="Cidade" color="#656565" />
          <CustomInput name="cidade" type="text" content="Digite" id="cidade" value={dataCep.localidade} onChange={handleAddressInputChange}/>
        </FormItem>
        <FormItem>
          <Label text="UF" color="#656565"  />
          <CustomInput name="uf" type="text" content="Digite" id="uf" value={dataCep.uf} onChange={handleAddressInputChange}/>
        </FormItem>
        <FormItem>
          <Label text="Endereço" color="#656565" />
          <CustomInput name="logradouro" type="text" content="Digite" id="logradouro" value={dataCep.logradouro} onChange={handleAddressInputChange}/>
        </FormItem>
        <FormItem>
          <Label text="Número" color="#656565" />
          <CustomInput name="numero" type="text" content="Digite" id="numero" value={addressData.numero} onChange={handleAddressInputChange}/>
        </FormItem>
        <FormItem>
          <Label text="Bairro" color="#656565" />
          <CustomInput name="bairro" type="text" content="Digite" id="bairro"value={dataCep.bairro} onChange={handleAddressInputChange}/>
        </FormItem>
        <FormItem>
          <Label text="Complemento" color="#656565" />
          <CustomInput type="text" content="Digite" id="complemento" name="complemento" value={dataCep.complemento} onChange={handleAddressInputChange}/>
        </FormItem>
        {/* Tomei a liberdade de adicionar inputs para receber dados de telefone e e-mail já que são dados para contato e este último deve renderizar na página principal */}
        <FormItem>
          <Label text="E-mail" color="#656565" />
          <CustomInput value={patientData.email} onChange={handlePatientInputChange} name="email" type="text" content="Digite" id="email"/>
        </FormItem>
        <FormItem>
          <Label text="Telefone" color="#656565" />
          <CustomInput value={patientData.telefone}onChange={handlePatientInputChange} name="telefone" type="text" content="Digite" id="telefone"/>
        </FormItem>
      </FormContainer>

    </Container>
  )
}

export default ContactInfoForm;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 27px 0 60px 0;
  overflow-y: hidden;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 5px;
`;

const FormItem = styled.div`
  width: 229px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;