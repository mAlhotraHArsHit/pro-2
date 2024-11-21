import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="text-[#6C63FF]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs?.slice(0, 6).map((job) => (
            <div
              key={job._id}
              className="transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <LatestJobCards job={job} />
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#6C63FF] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-[#5b2fa6] transition duration-200">
          View All Jobs
        </button>
      </div>
    </div>
  );
};

export default LatestJobs;
