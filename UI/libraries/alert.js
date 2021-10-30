import styles from "../../styles/alert.module.css";

const Alert = ({ alertMessage }) => {
  return (
    <>
      {alertMessage && (
        <div
          className={`${alertMessage && "bg-green pv2 ph2 white b fixed f6"} ${styles.alert}`}
        >
          {alertMessage}
        </div>
      )}
    </>
  );
};

export default Alert;
