import { useQueryClient, useMutation } from "react-query";
import fetchApi from "../../pages/api/index";

export const createOrUpdateJob = async (newJob) => {
  if(!newJob) {
    return null;
  }
  const { empId, ID, jobTitle, jobDescription, jobRequirements, skills, salary, companyName, contactInfo } = newJob;
  const query = `mutation {
    createOrUpdateJob(newJob: {ID: "${ID}", jobTitle: "${jobTitle}", jobDescription: "${jobDescription}",
       jobRequirements: "${jobRequirements}", skills: "${skills}",
        salary: ${salary}, companyName: "${companyName}", contactInfo: "${contactInfo}"
      }, empId: "${empId}")
      {
        ID
        jobTitle
        jobDescription
        jobRequirements
        salary
        appliedBy
        companyName
        contactInfo
        skills
        postedAt
      }
  }`;
  const jobs = await fetchApi("createOrUpdateJob", query);
  return jobs;
};

export default function useCreateJob(empId) {
  const queryClient = useQueryClient();
  return useMutation(createOrUpdateJob, {
    onSuccess: (data) => {
      let previousValue = queryClient.getQueryData(["jobsByEmployer", {empId}]);
      const jobIndex = previousValue.findIndex(previous => previous.ID === data.ID);
      let isPresent = false;
      previousValue.map((prev) => {
        if(prev.ID === data.ID) {
          previousValue.splice(jobIndex, 1, data);
          isPresent = true;
        }
      })
      if(!isPresent) {
        previousValue.unshift(data);
      }
      queryClient.setQueryData(["jobsByEmployer", {empId}] , previousValue);
    }
  });
}
