import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Utilities/StoredToLocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const allJobs = useLoaderData();
  useEffect(() => {
    const jobsAppliedID = getStoredApplication();
    if (allJobs.length > 0) {
      const jobsApplied = [];
      for (const id of jobsAppliedID) {
        const job = allJobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold my-12 text-[#1A1919]">
        Applied jobs
      </h1>
      <div>
        {appliedJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
