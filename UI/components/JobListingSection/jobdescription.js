const JobDescription = ({
  jobDescription
}) => {
  return (
    <div className="overflow-auto" style={{maxHeight: "130px"}}>
      <p className="f7">{jobDescription}</p>
    </div>
  )
  
}

export default JobDescription;