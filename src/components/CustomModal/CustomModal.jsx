import Modal from 'react-modal';

const customStyles = {
  overlay:{
    zIndex:'1000',
    background: '',
    width: '100vw',
    height: '100vh',
  }, 
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    minWidth: '80%',
  }
}

Modal.setAppElement('#root');

function CustomModal({isOpen, onRequestClose, children}){
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      contentLabel='Modal'
      style={customStyles}
    >
      {children}
    </Modal>
  );
}

export default CustomModal;