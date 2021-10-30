let freeLancers = require("../models/freelancers");
let jobs = require("../models/jobs");
let employers = require("../models/employers");
const { paginatedJobs, removeNullUndefined, filteredJobsUtil } = require("./utils");

const resolvers = {
  Query: {
    getFreelancerDetails: async (parent, { flId }) => {
      return freeLancers.filter(freeLancer => flId.split(",").includes(freeLancer.ID));
    },
    getAllPostedJobsPaginated: async (parent, {param}) => {
      const { page = 1, perPageCount = 10, skills = "", salary = 0 } = param;
      const filteredJobs = filteredJobsUtil(skills, salary, jobs);
      return paginatedJobs(page, perPageCount, filteredJobs);
    },
    getAllPostedJobsByEmployer: async (parent, { empId, page }) => {
      let jobsIdPosted = employers.filter(employer => employer.ID === empId)[0].jobPosted;
      const allJobsPostedByEmployer = jobs.reduce((acc, curr) => {
        if(jobsIdPosted.includes(curr.ID)){
          acc.push(curr)
        }
        return acc;
      }, [])
      return allJobsPostedByEmployer;
    }
  },
  Mutation: {
    applyJob: async(parent, {param: {jobId, flId, page, skills, salary}}) => {
      const filteredJobs = filteredJobsUtil(skills, salary, jobs);
      filteredJobs.forEach((job, i) => {
        if(job.ID === jobId) {
          filteredJobs[i].appliedBy.push(flId);
        }
      });
      return paginatedJobs(page, 10, filteredJobs);
    },
    updateFreeLancer: async(parent, {updateFreeLancer}) => {
      const { ID, name, skills, githubLink, companyName, designation } = updateFreeLancer;
      let freeLancersToBeUpdated;
      for(const i in freeLancers) {
        if(freeLancers[i].ID === ID) {
          freeLancers[i] = {
            ...freeLancers[i],
            ... removeNullUndefined({
              name,
              skills: skills?.[0].split(","),
              githubLink,
              companyName,
              designation
            })
          }
          freeLancersToBeUpdated = freeLancers[i];
          break;
        }
      }
      return freeLancersToBeUpdated;
    },
    createOrUpdateJob: async(parent, {newJob, empId}) => {
      const jobIndex = jobs.findIndex(job => job.ID === newJob.ID);
      newJob.postedAt = new Date().toISOString();
      newJob.skills = newJob.skills?.[0].split(",");
      if(jobIndex > -1) {
        newJob.appliedBy = jobs[jobIndex].appliedBy;
        jobs.splice(jobIndex,1,newJob);
      } else {
        jobs.unshift(newJob);
        newJob.appliedBy = [];
      }
      employers.filter(employer => employer.ID === empId)[0].jobPosted.push(newJob.ID);
      return newJob;
    }
  }
}

module.exports = resolvers;
