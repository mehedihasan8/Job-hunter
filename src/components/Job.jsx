import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Job = ({ job }) => {
  return (
    <div className="  p-6  md:p-12 shadow-lg">
      <img className="w-44 h-12" src={job.img} alt="" />
      <h1 className="font-bold text-3xl pt-4">{job.jobTitle}</h1>
      <p className="font-semibold pt-1 text-xl">{job.company}</p>
      <div className="flex pt-4 gap-6">
        <p className="py-1.5 px-4 border rounded-sm text-xl font-semibold  border-blue-400 text-blue-500 ">
          {job.remoteOrOnsite}
        </p>
        <p className="py-1.5 px-4 border rounded-sm text-xl font-semibold  border-blue-400 text-blue-500 ">
          {job.fullOrHalfTime}
        </p>
      </div>
      <div className="flex pt-4  pb-8 gap-12">
        <p className="inline-flex">
          <MapPinIcon className="h-6 w-6 text-black" />
          {job.jobLocation}
        </p>
        <p className="inline-flex ">
          <CurrencyDollarIcon className="h-6 w-6 text-black" />
          {job.salary}
        </p>
      </div>
      <button className="btn">View Details</button>
    </div>
  );
};

export default Job;
