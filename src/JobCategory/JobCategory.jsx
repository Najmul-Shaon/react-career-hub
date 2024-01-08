import { useEffect, useState } from "react";
import Job from "../Job/Job";

const JobCategory = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div>
      <div className="text-center mt-32">
        <h3 className="text-[#1A1919] text-5xl font-extrabold">
          Job Category List
        </h3>
        <p className="text-md font-medium text-[#757575] mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-center mt-8 gap-6">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
