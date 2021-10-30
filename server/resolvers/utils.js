
const removeNullUndefined = (obj) => {
  for (const key in obj) {
    if (obj[key] == null) {
      delete obj[key];
    }
  }
  return obj;
};

const paginatedJobs = (page, perPageCount, jobs ) => {
    const totalJobs = jobs.length;
    const totalPages = Math.ceil(totalJobs / perPageCount); // e.g 100

    const startingIndex = (page * perPageCount) - perPageCount;
    const endingIndex = startingIndex + perPageCount;
    if(totalJobs <= 10) {
      return {
        count: totalJobs,
        next: null,
        prev: null,
        results: jobs.slice(startingIndex, endingIndex)
      }
    }
    else if(page < totalPages && page > 1 && totalJobs > 10) { // e.g page = 8 or page = 2
      return {
        count: totalJobs,
        next: page + 1,
        prev: page - 1,
        results: jobs.slice(startingIndex, endingIndex)
      }
    } else if(page === 1) {
      return {
        count: totalJobs,
        next: page + 1,
        prev: null,
        results: jobs.slice(startingIndex, endingIndex)
      } 
    }
    return { // page = 10
        count: totalJobs,
        next: null,
        prev: page - 1,
        results: jobs.slice(startingIndex, endingIndex)
    }
}

const filteredJobsUtil = (skills, salary, jobs,) => {
  let filteredJobs = [];
    if(skills) {
      const skillsList = skills.split(",");
      jobs.forEach(job => {
        if(skillsList.every(inputSkill => job.skills.includes(inputSkill)) && job.salary >= salary) {
          filteredJobs.push(job);
        }
      })
    } 
    else if(salary) {
      filteredJobs = jobs.filter(job => job.salary >= salary);
    }
    else {
      filteredJobs = [...jobs];
    }
  return filteredJobs
}
module.exports = {paginatedJobs, removeNullUndefined, filteredJobsUtil}