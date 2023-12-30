import Modal from 'react-modal';

const customStyles = {
  overlay:{
    zIndex:'1000',
    backgroundColor: '#f6f6f6',
    width: '100vw',
    height: '100vh',
    opacity: '1'
  }, 
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    minWidth: '80%',
    maxWidth: '792px',
    backgroundColor: '#fff',
    boxShadow:'0 4px 4px 0 rgba(0, 0, 0, 0.25)',
    padding: '19px 32px',
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