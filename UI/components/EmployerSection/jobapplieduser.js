import { useState } from "react";
import useGetFreeLancer from "../../hooks/useGetFreelancer";
import Modal from "../../libraries/modal";
import Popup from "../../libraries/popup";
import ProfileAvtar from "../../libraries/profileavtar";
import UserDetails from "../UserSection/userdetails";

const AppliedUserCard = ({openPopup, onPopupClick, appliedBy, openedPopup}) => {
  const {
    data,
    isLoading,
    isError,
    error
  } = useGetFreeLancer(appliedBy?.join(","), Boolean(openedPopup));
  const [openModal, setOpenModal] = useState(false);
  const [avtarClickIndex, setAvtarClickIndex] = useState(0);
  return (
    <>
    {
      openModal &&
      <Modal openModal={openModal} onClose={() => setOpenModal(false)}>
        <UserDetails userData={data?.[avtarClickIndex]} onSubmitCB={() => setOpenModal(false)} isEmployerScreen/>
      </Modal>
    }
      {isLoading ?
        <div>Loading...</div>
        : isError ? (
          <div>Error: {error.message}</div>
        )
          : (
            <Popup openPopup={openPopup} onPopupClick={onPopupClick}>
              <div>{appliedBy?.length ?? 0} people applied</div>
              {
                data?.map((item, index) =>
                  <ProfileAvtar
                    key={item.ID} id={item.ID}
                    name={item.name || ""} 
                    onAvtarClick={() => {setOpenModal(true); setAvtarClickIndex(index)}}
                  />)
              }
            </Popup>
          )}
    </>
  )
}

export default AppliedUserCard;