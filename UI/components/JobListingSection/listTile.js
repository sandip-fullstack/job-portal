import Card from "../../libraries/card"
import JobDescription from "./jobdescription";
import JobTags from "./jobtags";
import JobTupleFooter from "./jobtuplefooter";
import JobTupleHeader from "./jobtupleheader";

const ListTile = ({result, freeLancerId, onJobApply, isEmployerScreen = false, onJobEdit}) => {
  const {
    ID,
    jobTitle,
    jobDescription,
    jobRequirements,
    skills,
    companyName,
    contactInfo,
    salary,
    appliedBy,
    postedAt
  } = result;
  return (
    <div className="pb2">
      <Card>
        <>
          <JobTupleHeader
            jobTitle={jobTitle}
            jobId={ID}
            companyName={companyName} 
            jobRequirements={jobRequirements}
            salary={salary}
            contactInfo={contactInfo}
            isEmployerScreen={isEmployerScreen}
            onJobEdit={onJobEdit}
          />
          <div className="mb2"/>
          <JobDescription jobDescription={jobDescription}/>
          <JobTags skills={skills}/>
          <JobTupleFooter postedAt={postedAt}
            appliedBy={appliedBy}
            freeLancerId={freeLancerId}
            jobId={ID}
            isEmployerScreen={isEmployerScreen}
            onJobApply={onJobApply}/>
        </>
      </Card>
    </div>
  )
}
export default ListTile;
