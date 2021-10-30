import { useRouter } from 'next/router';

import JobListingSection from "../../UI/components/JobListingSection"
import FilterSection from "../../UI/components/FilterSection"
import UserSection from "../../UI/components/UserSection/usersection";
import useGetAllJobs from "../../UI/hooks/useGetAllJobs";
import { useState } from "react";
import useGetFreeLancer from "../../UI/hooks/useGetFreelancer";
import useApplyJobs from "../../UI/hooks/useApplyJobs";
import Alert from '../../UI/libraries/alert';
import useAlert from '../../UI/hooks/useAlert';
import Modal from '../../UI/libraries/modal';
import UserDetails from '../../UI/components/UserSection/userdetails';

const Candidate = () => {
  const router = useRouter();
  const freeLancerId = router?.query?.freeLancerId;
  const [openModal, setOpenModal] = useState(false);

  const [alertMessage, showAlertMessage, ] = useAlert();
  const [page, setPage] = useState(1);
  const [salary, setSalary] = useState(0);
  const [skills, setSkills] = useState("");
  const [filter, setFilter] = useState({salary, skills});
  const[filterApplied, setFilterApplied] = useState(false); 
  const onPagination = (page) => {
    setFilterApplied(false);
    setPage(page);
  }
  const onApplyFilter = ({skills, salary}) => {
    setFilterApplied(true);
    setSalary(salary);
    setSkills(skills);
    setFilter({salary, skills})
  }

  const onUpdateProfile = () => {
    setOpenModal(true);
  }

  const {
    isLoading,
    isError,
    error,
    data,
    isPreviousData,
  } = useGetAllJobs(page, filter.skills, filter.salary);
  const {
    isLoading: isLoadingUser,
    isError: isErrorUser,
    error: errorUser,
    data: userData,
  } = useGetFreeLancer(freeLancerId);

  const mutateApplyJob = useApplyJobs(page, skills, salary);
  const onJobApply = async (jobId, flId) => {
    await mutateApplyJob.mutate({jobId, flId, page, skills, salary});
    showAlertMessage(`You have successfully applied.`);
  };
  return (
    <>
      <Alert alertMessage={alertMessage} />
      {
        userData && 
        <Modal openModal={openModal} onClose={() => setOpenModal(false)}>
          <UserDetails userData={userData[0]} onSubmitCB={() => setOpenModal(false)}/>
        </Modal>
      }
      
      <div className="flex flex-wrap items-start justify-around mh6-l pt6">
        <FilterSection onApplyFilter = {onApplyFilter}/>
        <JobListingSection
          isLoading={isLoading}
          isError = {isError}
          error={error}
          data = {data}
          isPreviousData = {isPreviousData}
          freeLancerId={freeLancerId}
          filterApplied={filterApplied}
          onPagination = {onPagination}
          onJobApply={onJobApply}
       />
        <UserSection
          isLoading={isLoadingUser}
          isError = {isErrorUser}
          error={errorUser}
          data = {userData?.[0]}
          onUpdateProfile={onUpdateProfile}
        />
      </div>
  </>)
}

export default Candidate