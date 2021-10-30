import { useQuery } from "react-query";
import fetchApi from "../../pages/api/index";

export const fetchDataFromGraphQL = async (param) => {
  const { page =1, perPageCount=10, skills="", salary=0 } = param;
  const query = ` {
    getAllPostedJobsPaginated(param: {page: ${page}, perPageCount: ${perPageCount}, skills: "${skills}", salary: ${salary}}) {
      count
      next
      prev
      results {
        ID,
        jobTitle,
        jobDescription,
        jobRequirements,
        skills,
        companyName,
        contactInfo,
        salary,
        appliedBy
        postedAt
      }
    }
  }`;

  const jobs = await fetchApi("getAllPostedJobsPaginated", query);
  return jobs;
};
export default function useGetAllJobs(page, skills, salary) {
  return useQuery(["jobs", {page, skills, salary}], () => fetchDataFromGraphQL({page, skills, salary}), 
  { keepPreviousData : true, staleTime: 30000, cacheTime: 30000 });
}
