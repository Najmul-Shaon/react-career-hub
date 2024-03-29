import PropTypes from "prop-types";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const FeatureJob = ({ featureJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = featureJob;

  return (
    <div className="card bg-base-100 p-8 border-2">
      <figure className="flex justify-start h-1/5">
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
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <CiLocationOn></CiLocationOn>
            <p>{location}</p>
          </div>
          <div className="flex items-center">
            <CiDollar></CiDollar>
            <p>Salary:{salary}</p>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/${id}`}>
            <button className="btn text-white bg-sky-500/75 text-lg font-extrabold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
FeatureJob.propTypes = {
  featureJob: PropTypes.object.isRequired,
};
export default FeatureJob;
