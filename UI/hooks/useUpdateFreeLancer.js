import { useQueryClient, useMutation } from "react-query";
import fetchApi from "../../pages/api/index";

export const updateFreeLancer = async (param) => {
  if(!param) {
    return null;
  }
  const { ID, name, designation, companyName, skills, githubLink } = param;
  const query = `mutation {
    updateFreeLancer(updateFreeLancer: {ID: "${ID}", name: "${name}", designation: "${designation}", companyName: "${companyName}", skills: "${skills}", githubLink: "${githubLink}"}) {
        ID
        name
        githubLink
        jobsApplied
        skills
        companyName
        designation
        avtarLink
      }
  }`;
  const freeLancer = await fetchApi("updateFreeLancer", query);
  return freeLancer;
};

export default function useUpdateFreeLancer(id) {
  const queryClient = useQueryClient();
  return useMutation(updateFreeLancer, {
    onSuccess: (data) => queryClient.setQueryData(["freelancer", {flId: id}] , [data]),
  });
}
