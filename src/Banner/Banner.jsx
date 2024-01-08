import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex items-center ">
      <div className="w-1/2">
        <h1 className="font-extrabold text-7xl text-[#1A1919]">
          One Step <br />
          Closer To Your <br />
          <span className="text-[#9873FF]">Dream Job</span>
        </h1>
        <p className="text-[#757575] text-lg font-medium my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Link className="btn text-white bg-sky-500/75 text-lg font-extrabold">
          Start Applying
        </Link>
      </div>
      <div className="w-1/2">
        <figure>
          <img src="https://i.postimg.cc/XqMPG1bL/user.png" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
