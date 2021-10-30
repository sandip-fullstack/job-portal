import { useRouter } from 'next/router';
import { useState } from 'react';
import EmployerSection from '../../UI/components/EmployerSection';
import JobCreationPanel from '../../UI/components/EmployerSection/jobcreationpanel';
import useGetAllJobsByEmployer from '../../UI/hooks/useGetAllJobsByEmplyer';
import Button from '../../UI/libraries/button';
import Modal from '../../UI/libraries/modal';

const Employer = () => {
  const router = useRouter();
  const employerId = router.query?.employerId;

  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editJob, setEditJob] = useState(null);
  const {
    isLoading,
    isError,
    error,
    data,
  } = useGetAllJobsByEmployer(employerId);
  const onJobEdit = (jobId) => {
    const toBeEdited = data.filter(item => item.ID === jobId)?.[0];
    setEditJob(toBeEdited);
    setOpenModal(true);
    setIsEdit(true);
  }
  return (
    <div className="marginMiddle pt6 flex flex-column items-center">
    {
      <Modal openModal={openModal} onClose={() => setOpenModal(false)}>
        <JobCreationPanel empId={employerId} onSubmitCB={() => setOpenModal(false)} isEdit={isEdit} editJob={editJob}/>
      </Modal>
    }
    <Button className="w-20-l mb4" onClick={() => {setIsEdit(false); setOpenModal(true)}}>
      Create a new job
    </Button>
    <EmployerSection
      isLoading = {isLoading}
      isError = {isError}
      error = {error}
      data = {data}
      onJobEdit={onJobEdit}
    />
    </div>
  )
}

export default Employer