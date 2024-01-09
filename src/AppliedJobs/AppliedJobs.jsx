import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Utilities/StoredToLocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filterDisplay, setFilterDisplay] = useState([]);

  const handleFilter = (filter) => {
    if (filter === "All") {
      setFilterDisplay(appliedJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (onsite) => onsite.remote_or_onsite === "Onsite"
      );
      setFilterDisplay(onsiteJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (remote) => remote.remote_or_onsite === "Remote"
      );
      setFilterDisplay(remoteJobs);
    }
  };

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
      setFilterDisplay(jobsApplied);
    }
  }, [allJobs]);

  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold my-12 text-[#1A1919]">
        Applied jobs
      </h1>
      <div className="flex justify-end my-4">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => handleFilter("All")}>All</a>
            </li>
            <li>
              <a onClick={() => handleFilter("Onsite")}>Onsite</a>
            </li>
            <li>
              <a onClick={() => handleFilter("Remote")}>Remote</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {filterDisplay.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
