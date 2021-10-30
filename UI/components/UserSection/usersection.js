import Button from "../../libraries/button";
import Panel from "../../libraries/panel";
import JobTags from "../JobListingSection/jobtags";
import Image from 'next/image'

const UserSection = ({isLoading, isError, error, data, onUpdateProfile}) => {
  return (
    <Panel>
      {
        isLoading ? 
          <div>Loading...</div>
        : isError ? (
          <div>Error: {error.message}</div>
        ) 
        : (
            data &&
            <>
            <div className="flex center absolute right-50"
              style={{height: "50px", width: "50px", top: "-22px", marginRight: "-22px", right: "50%"}}>
              <Image src={data.avtarLink} alt="Vercel Logo" width={72} height={16} />
            </div>
            <div className="tc f4 pb2 mt4">{data.name}</div>
            <div className="tc f6">{data.designation} at {data.companyName}</div>
            <JobTags skills={data.skills}/>
            <Button onClick={() => onUpdateProfile()}>Update Profile</Button>
            </>
            )
      }
        
    </Panel>
  )
}

export default UserSection;