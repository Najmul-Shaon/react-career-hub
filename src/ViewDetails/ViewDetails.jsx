import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { GrFormSchedule } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../Utilities/StoredToLocalStorage";
const ViewDetails = () => {
  const jobsDetails = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const jobDetails = jobsDetails.find((jobDetails) => jobDetails.id === idInt);

  const {
    job_title,
    educational_requirements,
    job_description,
    job_responsibility,
    experiences,
    salary,
    contact_information,
  } = jobDetails;

  const handleApply = () => {
    console.log("clicked");
    // toast("Your apply has been completed.");
    saveJobApplication(id);
  };

  return (
    <div className="my-10">
      <h1 className="text-[#1A1919] text-3xl font-extrabold text-center my-8">
        Job details of {job_title}
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <h4 className="text-[#757575] text-base font-medium mb-6">
            <span className="text-[#1A1919] font-extrabold">
              Job Description:
            </span>{" "}
            {job_description}
          </h4>
          <h4 className="text-[#757575] text-base font-medium mb-6">
            <span className="text-[#1A1919] font-extrabold">
              Respnsibility:
            </span>{" "}
            {job_responsibility}
          </h4>
          <div className="flex flex-col">
            <div className="mb-6">
              <h4 className="text-[#1A1919] font-extrabold text-base mb-4">
                Educational Requirements:
              </h4>
              <p className="text-[#757575] text-base font-medium ">
                {educational_requirements}
              </p>
            </div>
            <div>
              <h4 className="text-[#1A1919] font-extrabold text-base mb-4">
                Experience:
              </h4>
              <p className="text-[#757575] text-base font-medium">
                {experiences}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#9873ff1a] p-4 rounded-lg">
            <h4 className="text-[#1A1919] text-lg font-extrabold border-b-2 pb-6">
              Job Details
            </h4>

            <div>
              <div className="flex items-center gap-2 mt-4">
                <CiDollar className="text-lg"></CiDollar>
                <p className="text-[#757575] text-lg font-medium">
                  <span className="text-[#474747] font-bold">Salary:</span>
                  {salary} /month
                </p>
              </div>
              <div className="flex items-center gap-2">
                <GrFormSchedule className="text-lg"></GrFormSchedule>
                <p className="text-[#757575] text-lg font-medium">
                  <span className="text-[#474747] font-bold">Job Title:</span>
                  {job_title}
                </p>
              </div>
              <h3 className="my-7 text-[#1A1919] text-lg font-extrabold border-b-2 pb-6">
                Contact Information
              </h3>
              <div>
                <div className="flex items-center gap-2">
                  <LuPhone className="text-lg"></LuPhone>{" "}
                  <p className="text-[#757575] text-lg font-medium">
                    <span className="text-[#474747] font-bold">Phone:</span>
                    {contact_information.phone}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMail className="text-lg"></HiOutlineMail>{" "}
                  <p className="text-[#757575] text-lg font-medium">
                    <span className="text-[#474747] font-bold">Email:</span>{" "}
                    {contact_information.email}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-lg"></CiLocationOn>
                  <p className="text-[#757575] text-lg font-medium">
                    <span className="text-[#474747] font-bold">Address:</span>
                    {contact_information.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link
            onClick={handleApply}
            className="btn text-white bg-sky-500/75 text-lg font-extrabold my-6 w-full"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewDetails;
