const { gql } = require("apollo-server-express");


const typeDefs = gql`
  input NewJob {
    ID: String!
    jobTitle: String!
    jobDescription: String!
    jobRequirements: String!
    skills: [String!]!
    companyName: String!
    contactInfo: String
    salary: Float!
  }

  input filter {
    skills: String
    salary: Float
    page: Int
  }

  input applyJobParam {
    jobId: ID
    flId: ID
    page: Int
    skills: String
    salary: Float
  }

  input paginationWithFilter {
    page: Int,
    perPageCount: Int
    skills: String
    salary: Float
  }

  input UpdateFreeLancer {
    ID: String!
    name: String!
    githubLink: String!
    skills: [String!]
    designation: String!
    companyName: String!
  }

  type FreeLancer {
    ID: String!
    name: String!
    githubLink: String
    designation: String!,
    companyName: String!,
    avtarLink: String,
    skills: [String!]!
    jobsApplied: [String!]!
  }
  type Job {
    ID: String!
    jobTitle: String!
    jobDescription: String!
    jobRequirements: String!
    skills: [String!]!
    companyName: String!
    contactInfo: String
    salary: Float!
    appliedBy: [String]
    postedAt: String
  }
  type Employer {
    ID: String!
    empName: String!
    jobPosted: [String!]
  }

  type JobListPaginated {
    count: Int!
    next: Int
    prev: Int
    results: [Job!]
  }

  type Query {
    getFreelancerDetails(flId: String): [FreeLancer]
    getAllPostedJobsPaginated(param: paginationWithFilter!): JobListPaginated
    getAllPostedJobsByEmployer(empId: ID!): [Job!]
  } 
  type Mutation {
    applyJob(param: applyJobParam!): JobListPaginated
    updateFreeLancer(updateFreeLancer: UpdateFreeLancer!): FreeLancer
    createOrUpdateJob(newJob: NewJob, empId: String!): Job
  }
`;
module.exports = typeDefs;
