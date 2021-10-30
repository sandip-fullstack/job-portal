import { useQuery } from "react-query";
import fetchApi from "../../pages/api/index";

export const fetchDataFromGraphQL = async (empId) => {
  if(!empId) {
    return;
  }
  const query = `{
    getAllPostedJobsByEmployer(empId: ${empId}) {
      ID
      jobTitle
      jobDescription
      jobRequirements
      salary
      companyName
      contactInfo
      skills
      postedAt
      appliedBy
    }
  }`;

  const jobs = await fetchApi("getAllPostedJobsByEmployer", query);
  return jobs;
};
export default function useGetAllJobsByEmployer(empId) {
  return useQuery(["jobsByEmployer", {empId}], () => fetchDataFromGraphQL(empId));
}
