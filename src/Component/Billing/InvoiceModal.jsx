import { motion } from 'framer-motion';
import './style.css';
import BillForm from './Form';


// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
            initial={{ x: '200%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '200%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 75, damping: 15, duration: 2 }}
            className="modal-content"
          >
            <BillForm onClose={onClose}/>
            {/* <button onClick={onClose}>Close</button> */}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;