import { useState } from "react";
import { FaRegClock, FaUserAlt } from "react-icons/fa";
import Button from "../../libraries/button";
import AppliedUserCard from "../EmployerSection/jobapplieduser";

const JobTupleFooter = ({
  jobId,
  postedAt,
  appliedBy,
  freeLancerId,
  onJobApply,
  isEmployerScreen
}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openedPopup, setOpenedPopup] = useState("");

  const onApplyJob = (jobId, flId) => {
    onJobApply(jobId, flId)
  }

  const isJobApplied = appliedBy?.includes(freeLancerId?.toString());
  const daysAgo = Math.floor((Date.now() - new Date(postedAt)) / (1000 * 3600 * 24));

  return (
    <div className="f7 flex items-center justify-between">
        <div className="flex items-center">
          <div className="pa1 bg-near-white f7 flex items-center">
            <FaRegClock className="f6 pr1"/>{daysAgo} {`${daysAgo > 1 ? "days" : "day"}`} ago</div>
          <FaUserAlt className="ml3 f6 pr1"/>
          {
            isEmployerScreen && appliedBy?.length > 0 ?
            <AppliedUserCard openPopup={openPopup}
              onPopupClick={() => {
                setOpenPopup(openPopup => !openPopup);
                setOpenedPopup(openedPopup => jobId === openedPopup ? "" : jobId);
              }}
              openedPopup={openedPopup}
              appliedBy={appliedBy}
            /> :
            <div>{appliedBy?.length ?? 0} people applied</div>
          }
        </div>
        {
          !isEmployerScreen &&
          <Button className="ml4"
            disabled={isJobApplied}
            onClick={() => onApplyJob(jobId, freeLancerId)}
          >
            {isJobApplied ? "Applied" : "Apply"}
          </Button>
        }
    </div>
  )
}

export default JobTupleFooter;