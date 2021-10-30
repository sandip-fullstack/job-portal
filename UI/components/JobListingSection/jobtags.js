import styles from "../../../styles/jobtags.module.css";

const JobTags = ({
  skills
}) => {
  return (
    <ul className={styles.jobTags}>
      {
        skills.map(skill => {
          return (
            <li key={skill}>
              {skill}
            </li>
          )
        })
      }
    </ul>
  )
  
}

export default JobTags;