import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({children}) => {
  const [patientId, setPatientId] = useState();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  const openEditModal = (patientId) => {
    setPatientId(patientId);
    setEditModalOpen(true);
  }
  const closeEditModal = () => setEditModalOpen(false);

  const openDeleteModal = (patientId) => {
    setPatientId(patientId);
    setDeleteModalOpen(true);
  }
  const closeDeleteModal = () => setDeleteModalOpen(false);

  return (
    <ModalContext.Provider value={{
      patientId, 
      editModalOpen,
      openEditModal,
      closeEditModal,
      addModalOpen,
      openAddModal,
      closeAddModal,
      deleteModalOpen,
      openDeleteModal,
      closeDeleteModal,
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export {
  ModalContext, ModalProvider
}

