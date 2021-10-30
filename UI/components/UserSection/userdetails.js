import React, { useState } from "react";
import { useQuery } from "react-query";
import Select from 'react-select';
import { tags } from "../../constant";
import useUpdateFreeLancer from "../../hooks/useUpdateFreeLancer";
import Button from "../../libraries/button";

export const formSkillTags = (skills) => {
  const skillTags = skills?.reduce((acc, curr) => {
    acc.push({value: curr, label: curr});
    return acc;
  }, []);
  return skillTags;
}

const fetchGithubProjects  = async (githubProfile) => {
  const githubUser = githubProfile?.substr(githubProfile?.lastIndexOf("/") + 1);
  const res = await fetch(`https://api.github.com/users/${githubUser}/repos`);
  return res.json();
}
const UserDetails = ({userData, onSubmitCB, isEmployerScreen}) => {
  const {ID, name, githubLink, designation, companyName, skills} = userData;
  const intialState = {
    ID,
    name,
    githubLink,
    designation,
    companyName,
    skills
  }
  const [githubProfile, ] = useState(githubLink);
  
  const {
    data,
    isLoading,
    isError
  } = useQuery(["projects", {id: ID}], () => fetchGithubProjects(githubProfile), { staleTime: Infinity, cacheTime: 30000});

  const [alert, setAlert] = useState(false);
  const [newItemObj, setNewItemObj] = useState(intialState);
  const [linkValid, setLinkvalid] = useState(true);

  const mutateUpdateFreeLancer = useUpdateFreeLancer(ID);

  const onSubmit =  async () => {
    const urlRegex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    setLinkvalid(true);
    let isEmpty = Object.values(newItemObj).some(x => (x === null || x === ''));
    if(!urlRegex.test(newItemObj.githubLink)) {
      isEmpty = true;
      setLinkvalid(false);
    }
    if(isEmpty) {
      setAlert(true);
      return;
    }
    !isEmpty && await mutateUpdateFreeLancer.mutate(newItemObj);
    onSubmitCB();
  }
  const fields = [
    {val: "name", label: "Name*"},
    {val: "designation", label: "Designation*"},
    {val: "companyName", label: "Company*"}

  ]
  return (
    <div data-automation-id="add-new-item" className="flex flex-column w-100 h-50 center bg-white pa4 mt3">   
    {
        linkValid && alert && <div className="bg-red pv2 mb3 b white ph1 f6">&#9888; Please fill all details before you update</div>
    }
    {
      !linkValid && <div className="bg-red pv2 mb3 b white ph1 f6">&#9888; Please provide a valid github link</div>
    }
    <div className="pv2 flex flex-column">
    {
      fields.map((field, index) => {
        return (
          <div key={index} className="flex flex-column mb3">
            <label className="tl mb2">{field.label}</label>
            <input 
                className="tl pa1" 
                type="text" 
                disabled={isEmployerScreen}
                maxLength={40}
                onChange={(e) => setNewItemObj({...newItemObj, [field.val]: e.target.value})}
                defaultValue={newItemObj[field.val]}
            />
          </div>)
      })
    }
    <label className="tl mb2">Github Link*</label>
    <input 
        className="tl pa1" 
        type="url"
        disabled={isEmployerScreen}
        placeholder="https://www.example.com"
        onChange={(e) => setNewItemObj({...newItemObj, "githubLink": e.target.value})}
        value={newItemObj.githubLink}
    />
    <span className="validity"></span>
    </div>
    
    <div className="mv2">Skills*</div>
    <Select
      isMulti
      isDisabled={isEmployerScreen}
      options={tags}
      defaultValue={formSkillTags(skills)}
      onChange={(val) => setNewItemObj({...newItemObj, "skills": val.map(v => v.value).join(",")})}
    />
    {isLoading ? <div>Loading...</div> : isError ? <div>Error loading projects</div> :
        data && 
          <details>
          <summary className="pr2 f6 mt2">Click to see Projects</summary>
          <ul>
            {data?.map(repo => {
              return <li key={repo.id}>{repo.name}</li>
            })}
          </ul>
        </details>
    }
    {
      !isEmployerScreen &&
      <div className="flex justify-center mt3">
        <Button className="w-20" onClick={onSubmit}>Update</Button>
      </div>
    }
  </div>
  )
}

export default UserDetails;
