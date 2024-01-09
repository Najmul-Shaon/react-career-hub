import PropTypes from "prop-types";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const AppliedJob = ({ appliedJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = appliedJob;
  return (
    <div className="border-2 mb-4 rounded-lg p-8 flex items-center">
      <figure className="bg-[#F4F4F4] rounded-lg px-12 py-24 w-1/5">
        <img src={logo} alt="" />
      </figure>
      <div className="card-body w-3/5">
        <h2 className="card-title text-[#474747] text-3xl font-extrabold">
          {job_title}
        </h2>
        <p className="text-[#757575] font-semibold text-2xl">{company_name}</p>
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
      </div>
      <div className="card-actions w-1/5">
        <Link to={`/${id}`}>
          <button className="btn text-white bg-sky-500/75 text-lg font-extrabold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  appliedJob: PropTypes.object.isRequired,
};
export default AppliedJob;
