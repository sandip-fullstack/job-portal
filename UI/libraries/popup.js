import styles from "../../styles/popup.module.css";

const Popup = ({children, onPopupClick, openPopup}) => {
  return (
    <div className={styles.popup} onClick={onPopupClick}>
      {children[0]}
    {
      openPopup &&
      <span className={styles.popuptext}>
        {children[1]}
      </span>
    }
    </div>
  )
}

export default Popup;
