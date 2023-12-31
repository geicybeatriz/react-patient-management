import { createContext, useState } from "react";

const PatientContext = createContext();

const PatientProvider = ({ children }) => {
  const getLocalStorageData = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  };

  const [patientData, setPatientData] = useState(
    getLocalStorageData("patientData") || {
    nome: '',
    apelido: '',
    email: '',
    telefone: '',
    nacionalidade: '',
    genero: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    estadoCivil:'',
    observacoes:''
  });

  const [addressData, setAddressData] = useState(
    getLocalStorageData("addressData") || {
    cep: '',
    logradouro: '',
    numero: '',
    cidade: '',
    uf: '',
    bairro: '',
    complemento: ''
  });

  //localStorage.setItem("addressData", JSON.stringify(addressData));
  //localStorage.setItem("patientData", JSON.stringify(patientData));

  return (
    <PatientContext.Provider value={{
      patientData, setPatientData, addressData, setAddressData
    }}>
      {children}
    </PatientContext.Provider>
  );
}

export {
  PatientContext, PatientProvider
}