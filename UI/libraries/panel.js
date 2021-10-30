import styles from "../../styles/panel.module.css";

const Panel = ({children, className}) => {
  return (
    <div className={`${styles.panel} ${className ? className : ""}`}>
      {children}
    </div>
  )
}

export default Panel;
