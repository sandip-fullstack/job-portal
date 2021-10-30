import { useQueryClient, useMutation } from "react-query";
import fetchApi from "../../pages/api/index";

export const applyJob = async (param) => {
  if(!param) {
    return null;
  }
  const { jobId, flId, page, skills, salary } = param;
  const query = `mutation {
      applyJob(param: {jobId: "${jobId}", flId: "${flId}", page: ${page}, skills: "${skills}", salary: ${salary}}) {
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
  const jobs = await fetchApi("applyJob", query);
  return jobs;
};

export default function useApplyJobs(page, skills, salary) {
  const queryClient = useQueryClient();
  return useMutation(applyJob, {
    onSuccess: (data) => queryClient.setQueryData(["jobs", {page, skills, salary}] , data),
  });
}
