import styles from "../../styles/modal.module.css";

const Modal = ({children, openModal, onClose}) => {
  return (
    <>
    {
      openModal &&
      <>
        <div id="myModal" className={styles.modal}>
        <div className="bg-near-white center pa3 w-60-l">
          <span className={styles.close} onClick={onClose}>&times;</span>
          {children}
        </div>
        </div>
      </>
    }
    
  </>)
}

export default Modal;
