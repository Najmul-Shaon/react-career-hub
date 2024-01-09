import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";
import { Link } from "react-router-dom";

const FeatureJobs = () => {
  const [featureJobs, setFeatureJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeatureJobs(data));
  }, []);

  const handleViewBtn = () => {
    dataLength === featureJobs.length
      ? setDataLength(4)
      : setDataLength(featureJobs.length);
  };

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
        {featureJobs.slice(0, dataLength).map((featureJob) => (
          <FeatureJob key={featureJob.id} featureJob={featureJob}></FeatureJob>
        ))}
      </div>

      <div>
        <div className="my-8 text-center">
          <Link
            onClick={handleViewBtn}
            className="btn text-white bg-sky-500/75 text-lg font-extrabold"
          >
            {dataLength === featureJobs.length ? "View Less" : "View All"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
