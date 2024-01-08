import PropTypes from "prop-types";
import { CiDollar, CiLocationOn } from "react-icons/ci";
const FeatureJob = ({ featureJob }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = featureJob;
  return (
    <div className="card bg-base-100 p-2 border-2">
      <figure className="flex justify-start">
        <img src={logo} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="btn btn-outline btn-accent mr-4">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-accent">{job_type}</button>
        </div>
        <div className="flex justify-evenly items-center">
          <CiLocationOn></CiLocationOn>
          <p>{location}</p>
          <CiDollar></CiDollar>
          <p>Salary:{salary}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
FeatureJob.propTypes = {
  featureJob: PropTypes.object.isRequired,
};
export default FeatureJob;
