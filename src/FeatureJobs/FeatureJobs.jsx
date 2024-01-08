import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeatureJobs = () => {
  const [featureJobs, setFeatureJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeatureJobs(data));
  }, []);
  //   console.log(featureJobs);
  return (
    <div>
      <div className="text-center mt-32">
        <h3 className="text-[#1A1919] text-5xl font-extrabold">
          Featured Jobs
        </h3>
        <p className="text-md font-medium text-[#757575] mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8">
        {featureJobs.map((featureJob) => (
          <FeatureJob key={featureJob.id} featureJob={featureJob}></FeatureJob>
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
