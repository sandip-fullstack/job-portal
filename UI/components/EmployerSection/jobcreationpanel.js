import { useState } from "react";
import Select from "react-select";
import { tags } from "../../constant";
import useCreateJob from "../../hooks/useCreateJob";
import Button from "../../libraries/button";
import { formSkillTags } from "../UserSection/userdetails";

const getSize = (field) => {
  switch(field) {
    case "jobDescription": return 16000;
    case "companyName": return 50;
    case "jobRequirements": return 10;
    case "jobTitle": return 50;
    default: return 100;
  }
}

const getType = (field) => {
  switch(field) {
    case "contactInfo": return "tel";
    case "salary": return "number";
    default: return "text"
  }
}

const customProps = (field) => {
  switch(field) {
    case "salary": return {max: 30, min: 0};
    default: return {maxLength: getSize(field)};
  }
}
const JobCreationPanel = ({empId, onSubmitCB, editJob, isEdit = false}) => {
  const fields = [
    {val: "ID", label: "Job Id", default: ""},
    {val: "jobTitle", label: "Job Title", default: ""},
    {val: "jobDescription",label: "Job Description", default: ""}, 
    {val: "jobRequirements", label: "Job Requirements", default: ""},
    {val: "companyName", label: "Company Name", default: ""},
    {val: "contactInfo", label: "Contact Info", default: ""},
    {val: "salary", label: "Salary", default: ""},
    {val: "skills", label: "Skills", default: []}
  ];
  const initialData = fields.reduce((acc, curr) => {
    acc[curr.val] = !isEdit ? curr.default : editJob[curr.val];
    return acc;
  }, {empId});

  const [newJob, setNewJob] = useState(initialData);
  const [alert, setAlert] = useState(false);

  const createJob = useCreateJob(empId);
  const [phoneValid, setPhoneValid] = useState(true);

  const onSubmit = async () => {
    const phoneRegex = new RegExp(/(7|8|9)\d{9}/);
    let isEmpty = Object.values(newJob).some(x => (x === null || x === '' || x?.length === 0));
    if(!phoneRegex.test(newJob.contactInfo)) {
      isEmpty = true;
      setPhoneValid(false);
    }
    if(phoneRegex.test(newJob.contactInfo)) {
      setPhoneValid(true);
    }
    if(isEmpty) {
      setAlert(true);
      return;
    }
    !isEmpty && await createJob.mutate(newJob, empId);
    onSubmitCB();
  }
  return (
    <>
      <div className="pv2 flex flex-column">
      {
        phoneValid && alert && <div className="bg-red pv2 mb3 b white ph1 f6">&#9888; Please fill all details before you update</div>
      }
      {
        !phoneValid && <div className="bg-red pv2 mb3 b white ph1 f6">&#9888; Please provide a valid 10 digit phone number</div>
      }
      {
        fields.map((field, index) => {
          if(field.val !== "skills")
          return (
            <div key={index} className="flex flex-column">
              <label className="tl mb2">{field.label}</label>
              {
                field.val === "jobDescription" ? 
                  <textarea maxLength="16000" rows="8" cols="50"
                  value={newJob[field.val]}
                  onChange={(e) => setNewJob({...newJob, [field.val]: e.target.value})}
                  />
                : 
                <input
                  className="tl pa1" 
                  {...customProps(field.val)}
                  type={getType(field.val)}
                  value={newJob[field.val]}
                  onChange={(e) => setNewJob({...newJob, [field.val]: e.target.value})}
                />
              }
          </div>)
        })
      }
      <div className="mv2">Skills</div>
      <Select
        isMulti
        options={tags}
        defaultValue={formSkillTags(newJob.skills)}
        onChange={(val) => setNewJob({...newJob, "skills": val.map(v => v.value)})}
      />
      <div className="flex justify-center mt3">
        <Button className="w-20" onClick={onSubmit}>{isEdit ? "Update" : "Create"}</Button>
      </div>
  </div>
  </>
  )
}

export default JobCreationPanel;