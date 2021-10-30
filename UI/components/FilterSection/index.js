import { useState } from 'react';
import Select from 'react-select';
import { tags } from '../../constant';
import Button from '../../libraries/button';
import Panel from '../../libraries/panel';
import { FaFilter } from 'react-icons/fa';

const FilterSection = ({onApplyFilter}) => {
  const [skills, setSkills] = useState("");
  const [salary, setSalary] = useState(0);
  const onFilterApply = (salary, skills) => {
    onApplyFilter({salary, skills})
  }
  
  return (
    <Panel>
      <div className="pb2 bb b--light-gray">
        <FaFilter/> All filters
      </div>
      <div className="mv2 f6">Skills</div>
      <Select
        isMulti
        options={tags}
        onChange={(val) => setSkills(val.map(v => v.value).join(","))}
      />
      <div className="mb4"/>
      <div className="flex justify-between mb3">
        <label htmlFor="salary" className="f6">Min Salary</label>
        <input type="range" id="salary" name="vol" min="0" max="30" 
          onChange={(e) => setSalary(parseInt(e.target.value))} value={salary}></input>
        <div className="f7">$ {salary} / hr</div>
      </div>
      <Button onClick={() => onFilterApply(salary, skills)}>Apply</Button>
    </Panel>
    );
}

export default FilterSection;