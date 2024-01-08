import PropTypes from "prop-types";
const Job = ({ job }) => {
  const { logo, category_name, availability } = job;
  return (
    <div className="bg-[#7e90fe0d] p-6 rounded-lg">
      <figure className="mb-8">
        <img className="bg-[#9873ff1a] p-4 rounded-lg" src={logo} alt="" />
      </figure>
      <div>
        <h3 className="text-[#474747] text-lg font-extrabold">
          {category_name}
        </h3>
        <p className="text-[#A3A3A3] text-base font-medium mt-2">
          {availability}
        </p>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
