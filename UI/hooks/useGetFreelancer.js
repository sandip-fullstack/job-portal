import { useQuery } from "react-query";
import fetchApi from "../../pages/api/index";

export const fetchDataFromGraphQL = async (param) => {
  const { flId } = param;
  if(!flId) {
    return null;
  }
  const query = ` {
    getFreelancerDetails(flId: "${flId}") {
        ID
        name
        githubLink
        designation
        companyName
        skills
        jobsApplied
        avtarLink
      }
  }`;

  const jobs = await fetchApi("getFreelancerDetails", query);
  return jobs;
};

export default function useGetFreeLancer(flId, enabled = true) {
  return useQuery(["freelancer", {flId}],
  () => fetchDataFromGraphQL({flId}),
  { enabled: Boolean(enabled)});
}
