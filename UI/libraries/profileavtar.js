import styles from "../../styles/profileavtar.module.css";

const ProfileAvtar = ({name, onAvtarClick}) => {
  const shortName = name?.split(" ").map(x => x.charAt(0)).join("").toUpperCase();
  return (
    <div className={styles.profileavtar} onClick={onAvtarClick}>
      {shortName}
    </div>
  )
}

export default ProfileAvtar;