import { FaShoppingBag, FaPencilAlt, FaBuilding, FaPhoneAlt, FaDollarSign } from "react-icons/fa";
import classNames from "classnames";

const IconWithText = ({IconName, property, leftPadding = false}) => {
  return (
    <div className={classNames("flex", {
      "pl2": leftPadding,
      "pr2": !leftPadding
    })}>
      <IconName/>
      <div className="pl2">{property}</div>
  </div>
  )
}
const JobTupleHeader = ({
  jobTitle,
  companyName,
  jobRequirements,
  salary,
  contactInfo,
  jobId,
  onJobEdit,
  isEmployerScreen = false
}) => {

  const onEditJob = (jobId) => {
    onJobEdit(jobId);
  }

  return (
  <div className="jobTupleHeader">
    <div className="relative">
      <div className="title f5 b">
        {jobTitle}
      </div>
      {
      isEmployerScreen && 
      <div className="absolute right-0 top-0 pointer" onClick={() => onEditJob(jobId)}>
        <FaPencilAlt/>
      </div>
      }
      
    </div>
    <div className="mb2"/>
    <div className="flex f6 mb2">
      <IconWithText IconName={FaBuilding} property={companyName}/>
      <IconWithText IconName={FaPhoneAlt} property={contactInfo} leftPadding/>
    </div>
    <div className="flex f7">
        <IconWithText IconName={FaShoppingBag} property={jobRequirements}/>
        <IconWithText IconName={FaDollarSign} property={salary} leftPadding/>
        <div className="pl1"> / hr</div>
    </div>
  </div>
  )
}

export default JobTupleHeader;